const express = require('express')
const router = express.Router()

const users = require('./modules/users')
const records = require('./modules/records')
const categories = require('./modules/categories')

router.use('/users', users)
router.use('/records', records)
router.use('/categories', categories)

module.exports = router
