const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const recordController = {
  // create a new record
  postReocrd: async (req, res, next) => {
    try {
      // #swagger.tags = ['Expense Record']
      const { title, amount, note, categoryId } = req.body
      // uncommend after adding authentication process
      // const userId = req.user.id

      if (!title || !amount || !categoryId)
        return res.json(
          'missing title or amount or category id to create a new expense record'
        )

      await prisma.record.create({
        data: {
          title,
          amount,
          note,
          categoryId,
          userId: 13,
        },
      })

      res.json('successfully create a new record')
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
          userId: 13,
        },
      }

      // Get the current user's all expense records
      const expenseRecords = await prisma.record.findMany(prismaQuery)

      res.json(expenseRecords)
    } catch (error) {
      next(error)
    }
  },

  // edit a record
  putRecord: async (req, res, next) => {
    try {
      // #swagger.tags = ['Expense Record']
      const recordId = Number(req.params.rid)
      const { title, amount, note, categoryId } = req.body
      // uncommend after adding authentication process
      // const userId = req.user.id

      if (!title || !amount || !categoryId)
        return res.json(
          'missing title or amount or category id to update this record'
        )

      const theRecord = await prisma.record.findUnique({
        where: {
          id: recordId,
        },
      })
      theRecord ? theRecord : res.json('the record does not exist')

      await prisma.record.update({
        where: { id: recordId },
        data: { title, amount, note, categoryId, userId: 13 },
      })
      res.json('successfully update this record')
    } catch (error) {
      next(error)
    }
  },

  // delete a expense record
  deleteRecord: async (req, res, next) => {
    try {
      // #swagger.tags = ['Expense Record']
      const recordId = Number(req.params.rid)

      const theRecord = await prisma.record.findUnique({
        where: {
          id: recordId,
        },
      })
      theRecord ? theRecord : res.json('the record does not exist')

      await prisma.record.delete({
        where: {
          id: recordId,
        },
      })
      res.json('successfully delete this record')
    } catch (error) {
      next(error)
    }
  },

  // get all income records and accept query string
  getIncomeReocrds: async (req, res, next) => {
    try {
      // uncommend after adding authentication process
      // const userId = req.user.id

      // Basic query object
      const prismaQuery = {
        where: {
          userId: 13,
        },
      }

      // Get the current user's all income records
      const incomeRecords = await prisma.record.findMany(prismaQuery)

      res.json(incomeRecords)
    } catch (error) {
      next(error)
    }
  },
}

module.exports = recordController
