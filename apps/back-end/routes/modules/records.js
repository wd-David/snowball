const express = require('express')
const router = express.Router()

const recordController = require('../../controllers/record-controller')

router.get('/expense', recordController.getExpenseRecords)
router.get('/income', recordController.getIncomeReocrds)
router.put('/:rid', recordController.putRecord)
router.delete('/:rid', recordController.deleteRecord)
router.post('/', recordController.postReocrd)

module.exports = router
