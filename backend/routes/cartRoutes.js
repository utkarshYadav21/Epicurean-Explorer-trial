const express = require('express')
const authController = require('../controller/authController')
const cartController = require('../controller/cartController')


const router = express.Router()

router.route('/')
.get(authController.protect,cartController.getAllCartitems)
.post(authController.protect,cartController.addItemtoCart)


router.delete('/deling',authController.protect,cartController.deleteIngredient)
router.delete('/delrecipe',authController.protect,cartController.deleteRecipe)

module.exports = router