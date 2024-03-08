const express = require('express')
const recipeController = require('../controller/recipeController')

const router = express.Router()

router.route('/')
    .post(recipeController.getSimilarRecipe)


module.exports = router