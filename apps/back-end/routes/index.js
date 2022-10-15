const express = require('express')
const router = express.Router()

const users = require('./modules/users')
const expenseRecords = require('./modules/expense-records')

router.use('/users', users)
router.use('/expense-records', expenseRecords)

module.exports = router
