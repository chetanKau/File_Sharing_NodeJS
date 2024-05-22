const express=require('express')
const fileController=require('../controllers/file.controller')

const router=express.Router();

router.post("/api/files/",fileController.uploadFile)

router.get("/files/:uuid",fileController.generateDynamicLink)

router.get("/files/download/:uuid",fileController.downloadFileUUID)

router.post("/api/files/send",fileController.sendEmailDownloadLink)

module.exports=router;
