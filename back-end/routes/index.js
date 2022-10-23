const express = require('express')
const router = express.Router()

const users = require('./modules/users')
const records = require('./modules/records')

router.use('/users', users)
router.use('/records', records)

module.exports = router
