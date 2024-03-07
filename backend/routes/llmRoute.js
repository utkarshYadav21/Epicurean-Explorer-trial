const express = require('express')
const llmController = require('../controller/llmController')
const router = express.Router()

router.route('/')
    .post(llmController.generateAIContent)

module.exports = router