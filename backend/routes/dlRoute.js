const express = require('express')
const multer = require('multer')
const dlController = require('../controller/dlController')
// const multer  = require('multer')
// const upload = multer({ dest: '../uploads/' })
const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Handle image upload and call the controller
//router.post('/', upload.single('image'),dlController.getrecipefromImage)
router.post('/', upload.single('image'),dlController.getrecipefromImage);
//send data in form-data
module.exports = router