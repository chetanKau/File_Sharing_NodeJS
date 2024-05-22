
const multer = require('multer');
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const FileModel = require('../models/file.models')

const uploadDirPath = path.join(__dirname, "..", 'files')
// console.log(uploadDirPath);

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uploadDirPath)
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        const fileName = (file.originalname) + uuidv4() + path.extname(file.originalname)
        cb(null, fileName)
    }

})

const upload = multer({
    storage: storage,
}).single("file")

const uploadFile = async (req, res) => {
    upload(req, res, async (error) => {
        if (error) {
            console.log("File upload process is having error",error);
            return;
        }

        // console.log("File is uploaded successfully", req.file);

        const newFile = new FileModel({
            originalFileName: req.file.originalname,
            newFileName: req.file.filename,
            path: req.file.path,
            fileSize: req.file.size
        })

        const newelyInsertedFile = await newFile.save();

        res.json({
            status: "success",
            message: "File is uploaded successfully",
            insertedFileId: newelyInsertedFile._id
        })

    })

}

const generateDynamicLink = async (req, res) => {


    res.json({
        status: "success",
        message: "File downloaded successfully"
    })
}

const downloadFileUUID = async (req, res) => {

    res.json({
        status: "success",
        message: "File download File with UUID successfully"
    })
}

const sendEmailDownloadLink = async (req, res) => {

    res.json({
        status: "success",
        message: "File Link send on email successfully"
    })
}

const fileController = {
    uploadFile,
    generateDynamicLink,
    downloadFileUUID,
    sendEmailDownloadLink
}

module.exports = fileController;