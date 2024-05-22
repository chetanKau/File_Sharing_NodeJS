const express = require('express')
const fileRoutes = require('./routes/file.routes')
const mongoose = require('mongoose')


const app = express()
// app.use(express.json())
app.use(express.urlencoded())
app.use(fileRoutes) //connecting file routes 

mongoose.connect('mongodb://localhost:27017/filesharingapp')
    .then(() => {
        console.log("Databse Connected Successfully");
    })
    .catch((error) => {
        console.log("Databse connecting process went wrong!");
    })

app.listen(4080, () => {
    console.log("Port is up and running port is 4080")
})