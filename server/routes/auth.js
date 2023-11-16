const express = require('express')

const db = require('../models/db');

//Google Auth Client defined in auth Controller File
const client = require('../controllers/authController')

const jwt = require("jsonwebtoken")
require('dotenv').config();


const authMiddleware = require('../middlewares/authMiddleware');

const routes = express.Router()

//JWT Secrete Key and JWT Refresh Key for generating JWT Key and Refresh Key 
const jwt_secrete = process.env.JWT_SECRETE_KEY
const refreshJwtSecret = process.env.REFRESH_SECRETE_KEY

//Endpoint for Google OAUTH Authentication the main workflow of OAUTH will be done in the front end and the front end will send the code to the backend
//and the task of the backend is to verify the code and get the user details and if the user already exists in the database then we will generate jwt and refresh token and send it to the front end for access of home
//if the user is signup of first time then we will store the user details in the databse
routes.post('/login', async (req, res) => {
    //If Bad Request i.e when the code is not sent by the front end.
    if (!req.body['code']) {
        res.status(400).json({ "details": "Code Required for authentication" });
    }

    //To handle any exception 
    try {
        const code = req.body.code;
        console.log(code);

        //Extract the Tokens from Code 
        const tokens = await client.getToken(code)

        //Get the ID Token
        const idToken = tokens.tokens.id_token;

        //Verify the Token 
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        //Get the Basic User Details
        const payload = ticket.getPayload();

        console.log(payload);

        const user = {
            googleid: payload.sub,
            name: payload.name,
            first_name: payload.given_name,
            last_name: payload.family_name,
            email: payload.email,
            profile_pic: payload.picture,
        };

        let sql = `SELECT * FROM users WHERE email = '${user.email}' `;

        db.query(sql, (err, result) => {
            if (err) {
                res.status(500).json({ 'status': 'Internal Server Error' })
            }
            console.log(result.length);
            if (result.length <= 0) {
                db.query('INSERT INTO users SET ?', user, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    if (result) {
                        console.log("Successfully Register the User");
                    }
                })
            }
        })

        //we will generate jwt token with experies of 10mins and using email 
        const token = jwt.sign({ email: user.email }, jwt_secrete, { expiresIn: '10m' })

        //generate refresh Token with expery 1d
        const refreshToken = jwt.sign({ email: user.email }, refreshJwtSecret, { expiresIn: '1d' })

        return res.json({ jwt: token, refrehToken: refreshToken, status: 'ok' });

    } catch (e) {
        console.log(e);
        res.status(401).json({ "details": "Failed to Authenticate" });
    }
})

//Endpoint for Listing Invoice Details
//Protected Routes Cannot access without Proper JWT Token 
//Used Auth Middleware for Authentication and Authorization
routes.get('/invoice-details', authMiddleware, async (req, res) => {
    console.log("Invoice Request");
    console.log(req.user);
    const sql = 'SELECT * FROM invoice_details WHERE email = ?';
    db.query(sql, [req.user.email], (err, result) => {
        if (err) {
            // throw err;
            res.status(500).json({ "status": "Something Went Wrong" });
        }
        else {
            res.json({ "status": "ok", "data": result });
        }
    })
})


//endpoint for stroinf the invoice details with Authentication Middleware
routes.post('/invoice-details', authMiddleware, async (req, res) => {
    console.log("Post Invoice Request");
    console.log(req.user);
    //storing the Email and Amount and Due date
    const sql = 'INSERT INTO invoice_details(email, invoice_amount, invoice_due) VALUES(?,?,?)';

    db.query(sql, [req.user.email, req.body.amount, req.body.due], (err, result) => {
        if (err) {
            // throw err;
            res.status(500).json({ "status": "Something Went Wrong" });
        }
        else {
            res.json({ "status": "ok", "data": result });
        }
    })
})


//endpoint for sending the Profile to the front end.
routes.get('/profile', authMiddleware, async(req, res) => {
    console.log('Profile Request');
    const sql = 'SELECT * from users WHERE email = ?';
    db.query(sql, [req.user.email], (err, result) => {
        if(err)
        {
            res.status(500).json({ "status": "Something Went Wrong" });
        }
        else
        {
            res.json({ "status": "ok", "data": result });
        }
    })
})

module.exports = routes
