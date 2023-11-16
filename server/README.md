# Node.js Application with MySQL Database

Welcome to the Node.js application with MySQL database!

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm: [npm comes with Node.js, so no need to install separately]
- XAMPP: [Download and Install XAMPP](Neccessary for MYSQL Database)

### Installation

1. **Navigate and Install**
  
    Navigate to the server folder and install node modules by npm install

2. **Start XAMPP** 

    Start the XAMPP for MYSQL Database i.e Start the Apache Module on port 80 and MYSQL on port 3306 in the XAMPP Control Pannel.
    
    U can access the MYSQL Database in the http://localhost/phpmyadmin/

3. **Set Up env File**

    PORT = 3001

    HOST = localhost

    GOOGLE_CLIENT_SECRET = Google Credentails

    GOOGLE_CLIENT_ID = Google Credentails

    REFRESH_SECRETE_KEY = Secrete Key for JWT Refresh Token(any random key)

    JWt_SECRETE_KEY = Secrete Key for JWT Token(any random key)

    WEBHOOK_URL = WebHook Zapier URL

    DATABASE_PORT = 3306

    DATABASE_USER = 'root'

    DATABASE_PASS = ''

    DATABASE_HOST = 'localhost'

4. **Create Database and Tables**

    Create the Database SaasPlatform in the PHP Admin. 

    To Create a Table Uncomment the Table Creation code in the models/db.js and Create the user and Invoice Table 

5.  **Run the Application**
    
    Run the application by npm start command

   
