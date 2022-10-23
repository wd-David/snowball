const express = require('express')
const router = express.Router()

const userController = require('../../controllers/user-controller')

router.post('/logIn', userController.logIn)
router.post('/register', userController.register)

module.exports = router
