const express = require('express')
const app = express();
const dotenv =  require('dotenv')
dotenv.config()

// env
const port = process.env.PORT

app.use('/', (req, res, next) => {
    res.send("<center>Welcome to the application</center>")
})

app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`)
})