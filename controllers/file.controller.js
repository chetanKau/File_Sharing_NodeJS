
const multer = require('multer');
const path = require('path')
const {v4:uuidv4}=require('uuid')

const uploadDirPath = path.join(__dirname, "..", 'files')
// console.log(uploadDirPath);

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uploadDirPath)
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        const filePath =(file.originalname) +uuidv4(6) + path.extname(file.originalname)
        cb(null, filePath)
    }

})

const upload = multer({
    storage: storage
}).single("file")

const uploadFile = async (req, res) => {
    upload(req, res, (error) => {
        if (error) {
            console.log("File upload process is having error");
            return;
        }

        console.log("File is uploaded successfully");
        res.json({
            status: "success",
            message: "File is uploaded successfully"
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