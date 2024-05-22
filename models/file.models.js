const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    originalFileName: {
        type: String,
    },
    newFileName: {
        type: String
    },
    path: {
        type: String
    },
    fileSize: {
        type: Number
    }

})
const fileSharingDB=mongoose.model("File",fileSchema)

module.exports = fileSharingDB;