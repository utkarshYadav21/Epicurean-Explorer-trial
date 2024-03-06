const express = require('express');
const authController = require('../controller/authController')
const favController = require('../controller/favController')
const router = express.Router()


router.route('/')
        .get(authController.protect,favController.getfavrecipe)
        .post(authController.protect,favController.addtofav)
        .delete(authController.protect,favController.deletefav)

module.exports = router