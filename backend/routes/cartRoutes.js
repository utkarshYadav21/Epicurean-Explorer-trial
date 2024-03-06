const express = require('express')
const authController = require('../controller/authController')
const cartController = require('../controller/cartController')


const router = express.Router()

router.route('/')
.get(authController.protect,cartController.getAllCartitems)
.post(authController.protect,cartController.addItemtoCart)

module.exports = router