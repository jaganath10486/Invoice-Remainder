const express = require('express')
const cors = require('cors')

require('dotenv').config()


const authRoute = require('./routes/auth')
const zapRoute = require('./routes/zap');

const app = express()

//To Parse the Request Body of Object Type
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


app.use(authRoute)
app.use(zapRoute);

//To handle Not Found Endpoint
app.use((req, res) => {
    res.status(404).json("Request Endpoint Not Found")
})

//To handle any error
app.use((err, req, res) => {
    res.status(500).json("Internal Server Error")
  });

module.exports = app