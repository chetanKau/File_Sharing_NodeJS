const express = require('express')
const fileRoutes = require('./routes/file.routes')


const app = express()
// app.use(express.json())
app.use(express.urlencoded())
app.use(fileRoutes) //connecting file routes 



app.listen(4080, () => {
    console.log("Port is up and running port is 4080")
})