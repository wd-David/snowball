const express = require('express')
const router = express.Router()

const users = require('./modules/users')
const records = require('./modules/records')
const categories = require('./modules/categories')

const { authenticateUser } = require('../middleware/authReq')

router.use('/records', authenticateUser, records)
router.use('/categories', authenticateUser, categories)
router.use('/users', users)

module.exports = router
