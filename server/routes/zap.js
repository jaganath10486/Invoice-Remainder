const express = require('express')
const axios = require('axios')
require('dotenv').config()

const webhook = require('../utils/zap_webhook');
const db = require('../models/db');
const authMiddleware = require('../middlewares/authMiddleware')

//DYnamic HTML Template
const genertaeHTML = require('../Template/index');


const routes = express.Router();

//End Point for automating the past due invoices to the user email when the user make a reuqest to the endpoint then all the past due invoices will be sent.
//Protected Route Cannot access without proper jwt token
routes.get('/remainder', authMiddleware, async (req, res) => {

    //First get all the invoices of the particular user
    const sql = 'SELECT * from invoice_details where email = ?';
    db.query(sql, [req.user.email], (err, result) => {
        if (err) {
            return res.json({ 'status': 'error', 'data': 'Error Occured in sending the Mail try after some time' });
        }
        //If No Invoice Due records Found
        if (result.length == 0) {
            return res.json({ 'status': 'no', 'data': 'No Invoices Found with Given Account' })
        }

        let dueinvoices = [];   //Array to store the Past Due Invoices;

        for (var i = 0; i < result.length; i++) {
            var record = result[i];
            // console.log(record);
          
            var dueDate = new Date(record.invoice_due);
            var currentDate = new Date()

            //If the invoice is past due we will compare with today date we will send the mail to the user
            if (dueDate < currentDate) {
                dueinvoices.push(record);
            }
        }

        console.log('due invoices', dueinvoices);

        //If there are no past due invoices
        if (dueinvoices.length == 0) {
            return res.json({ 'status': 'no', 'data': 'Congralution there are no invoices with past due' })
        }

        //We will send the mail of each invoice past due mail to the user
        for (var i = 0; i < dueinvoices.length; i++) {
            let html = genertaeHTML(dueinvoices[i].id, dueinvoices[i].invoice_amount, dueinvoices[i].invoice_due);
            //Web Hook Utility Function for automating the email
            webhook.notifyWebhook(process.env.WEBHOOK_URL, { "email": dueinvoices[i].email, 'subject': "Your invoice is due", 'body': html })
                .then((result) => {
                    console.log("Mail Sent");
                    res.json({ 'status': 'ok', 'data': 'Mail Sent!! Check Your Mail for more details' });
                })
                .catch((err) => {
                    res.json({ 'status': 'error', 'data': 'Error Occured in sending the Mail try after some time' });
                })
        }
    })

})

module.exports = routes;