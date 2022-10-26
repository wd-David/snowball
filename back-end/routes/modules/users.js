const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const userController = require('../../controllers/user-controller')

router.post(
  '/logIn',
  passport.authenticate('local', { session: false }),
  userController.logIn
)
router.post('/register', userController.register)

module.exports = router
