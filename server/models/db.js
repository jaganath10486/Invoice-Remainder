const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const host = process.env.DATABASE_HOST || 3306;
const user = process.env.DATABASE_USER || 'root';
const password = process.env.PASSWORD || '';
const port = process.env.DATABASE_PORT || 3306;


const db = mysql.createConnection({
    database : 'SaasPlatform',
    host,
    user,
    password,
    port
});


db.connect(err => {
    if(err)
    {
        throw err;
    }
    console.log('Database Connected');
})


//Create A Users Table in the Database 
//This Is one Time Query for creating the users Table It stores the User information
 
/*const sql = "CREATE TABLE IF NOT EXISTS users (  email VARCHAR(255) PRIMARY KEY,  googleid VARCHAR(255) NOT NULL, name VARCHAR(255), first_name VARCHAR(255), last_name VARCHAR(255), profile_pic VARCHAR(255));"

db.query(sql, (err, result) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log(result);
    }
})


//Create A Invoice Details Table in the Database 
//Description of the table it contains all invoice details of the users for every month along with invoice amount and invoice due etc

/*

Example : 
cs20b1070@iiitdm.in 20.20 10-10-2023
cs20b1070@iiitdm.in 50.30 10-08-2023
jaganath@gmail.com 100.00  11-08-2023\

*/

/* const sql = "CREATE TABLE IF NOT EXISTS invoice_details ( id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), invoice_amount DECIMAL(10, 2), invoice_due DATE, information TEXT, FOREIGN KEY (email) REFERENCES users(email) );"

db.query(sql, (err, result) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log(result);
    }
})*/

module.exports = db;
