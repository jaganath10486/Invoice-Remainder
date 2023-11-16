//Used Google Auth Library Offical Node js Library for OAUTH
const { OAuth2Client } = require('google-auth-library')

//Define the Client with client Id and Client Secrete and exported to use in the application
const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'postmessage'
)


module.exports = client;

