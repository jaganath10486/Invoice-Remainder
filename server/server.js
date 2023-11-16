const app = require("./app")
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log('listening to port ', PORT);
})
