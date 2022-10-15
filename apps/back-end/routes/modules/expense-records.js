const express = require('express')
const router = express.Router()

const expenseRecordController = require('../../controllers/expense-record-controller')

router.put('/:erid', expenseRecordController.putExpenseRecord)
router.delete('/:erid', expenseRecordController.deleteExpenseRecord)
router.post('/', expenseRecordController.postExpenseReocrd)
router.get('/', expenseRecordController.getExpenseRecords)

module.exports = router
