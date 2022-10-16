const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const expenseRecordController = {
  // create a new expense record
  postExpenseReocrd: async (req, res, next) => {
    try {
      // #swagger.tags = ['Expense Record']
      const { title, amount, note, categoryId } = req.body
      // uncommend after adding authentication process
      // const userId = req.user.id

      if (!title || !amount || !categoryId)
        return res.json(
          'missing title or amount or category id to create a new expense record'
        )

      await prisma.expenseRecord.create({
        data: {
          title,
          amount,
          note,
          categoryId,
          userId: 11,
        },
      })

      res.json('successfully create a new expense record')
    } catch (error) {
      next(error)
    }
  },

  // get all expense records
  getExpenseRecords: async (req, res, next) => {
    // uncommend after adding authentication process
    // const userId = req.user.id
    try {
      // #swagger.tags = ['Expense Record']

      // Basic query object
      const prismaQuery = {
        where: {
          userId: 1,
        },
      }

      // Get the current user's all expense records
      const expenseRecords = await prisma.expenseRecord.findMany(prismaQuery)

      res.json(expenseRecords)
    } catch (error) {
      next(error)
    }
  },

  // edit a expense record
  putExpenseRecord: async (req, res, next) => {
    try {
      // #swagger.tags = ['Expense Record']
      const expenseRecordId = Number(req.params.erid)
      const { title, amount, note, categoryId } = req.body
      // uncommend after adding authentication process
      // const userId = req.user.id

      if (!title || !amount || !categoryId)
        return res.json(
          'missing title or amount or category id to update this expense record'
        )

      const theRecord = await prisma.expenseRecord.findUnique({
        where: {
          id: expenseRecordId,
        },
      })
      theRecord ? theRecord : res.json('the expense record does not exist')

      await prisma.expenseRecord.update({
        where: { id: expenseRecordId },
        data: { title, amount, note, categoryId, userId: 11 },
      })
      res.json('successfully update this expense record')
    } catch (error) {
      next(error)
    }
  },

  // delete a expense record
  deleteExpenseRecord: async (req, res, next) => {
    try {
      // #swagger.tags = ['Expense Record']
      const expenseRecordId = Number(req.params.erid)

      const theRecord = await prisma.expenseRecord.findUnique({
        where: {
          id: expenseRecordId,
        },
      })
      theRecord ? theRecord : res.json('the expense record does not exist')

      await prisma.expenseRecord.delete({
        where: {
          id: expenseRecordId,
        },
      })
      res.json('successfully delete this expense record')
    } catch (error) {
      next(error)
    }
  },
}

module.exports = expenseRecordController
