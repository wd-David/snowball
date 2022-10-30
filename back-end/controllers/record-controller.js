const { Prisma, PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({ log: ['query'] })

const recordController = {
  // Create a new record
  // URL: post /records
  postReocrd: async (req, res, next) => {
    try {
      console.log(req.user)
      const { title, amount, note, categoryId } = req.body
      const userId = req.user.id

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
          userId,
        },
      })

      res.json('successfully create a new record')
      // #swagger.tags = ['Expense Record']
    } catch (error) {
      next(error)
    }
  },

  // Edit the record
  // URL: put /records/:rid
  putRecord: async (req, res, next) => {
    try {
      const recordId = Number(req.params.rid)
      const { title, amount, note, categoryId } = req.body
      const userId = req.user.id

      // Check if there are missing data
      if (!title || !amount || !categoryId)
        return res.json(
          'missing title or amount or category id to update this record'
        )

      // Check if the record is in database
      const theRecord = await prisma.record.findUnique({
        where: {
          id: recordId,
        },
      })
      theRecord ? theRecord : res.json('the record does not exist')

      // Check if the record is one of the current user's records
      userId === theRecord.userId
        ? userId
        : res.json('this record does not belong to the current user')

      // Update this record
      await prisma.record.update({
        where: { id: recordId },
        data: { title, amount, note, categoryId },
      })

      res.json('successfully update this record')
      // #swagger.tags = ['Expense Record']
    } catch (error) {
      next(error)
    }
  },

  // Delete the record
  // URL: delete /records/:rid
  deleteRecord: async (req, res, next) => {
    try {
      const recordId = Number(req.params.rid)

      // Check if the record is in database
      const theRecord = await prisma.record.findUnique({
        where: {
          id: recordId,
        },
      })
      theRecord ? theRecord : res.json('the record does not exist')

      // Check if the record is one of the current user's records
      userId === theRecord.userId
        ? userId
        : res.json('this record does not belong to the current user')

      // Delete this record
      await prisma.record.delete({
        where: {
          id: recordId,
        },
      })

      res.json('successfully delete this record')
      // #swagger.tags = ['Expense Record']
    } catch (error) {
      next(error)
    }
  },

  // Get all expense records and accept query string
  getExpenseRecords: async (req, res, next) => {
    try {
      const userId = req.user.id

      // Get all expense category ids
      const result =
        await prisma.$queryRaw`SELECT id FROM "Category" WHERE NOT "mainCategory" = 'Income' AND NOT "mainCategory" = 'Savings';`
      const categoryIds = result.map(({ id }) => id)

      // Basic query object, without query string
      // const prismaQuery = {
      //   where: {
      //     userId,
      //   },
      // }

      // With query string

      // Get the current user's all expense records
      // const expenseRecords = await prisma.record.findMany(prismaQuery)
      const expenseRecords =
        await prisma.$queryRaw`SELECT * FROM "Record" WHERE "userId" = ${userId} AND "categoryId" IN (${Prisma.join(
          categoryIds
        )});`

      res.json(expenseRecords)
      // #swagger.tags = ['Expense Record']
    } catch (error) {
      next(error)
    }
  },

  // Get all income records and accept query string
  getIncomeReocrds: async (req, res, next) => {
    try {
      const userId = req.user.id

      // Get all income category ids
      const result =
        await prisma.$queryRaw`SELECT id FROM "Category" WHERE "mainCategory" = 'Income';`
      const categoryIds = result.map(({ id }) => id)

      // Basic query object, without query string
      // const prismaQuery = {
      //   where: {
      //     userId,
      //   },
      // }

      // With query string

      // Get the current user's all income records
      // const incomeRecords = await prisma.record.findMany(prismaQuery)
      const incomeRecords =
        await prisma.$queryRaw`SELECT * FROM "Record" WHERE "userId" = ${userId} AND "categoryId" IN (${Prisma.join(
          categoryIds
        )});`

      res.json(incomeRecords)
    } catch (error) {
      next(error)
    }
  },

  // Get all saving records and accept query string
  getSavingRecords: async (req, res, next) => {
    try {
      const userId = req.user.id

      // Get all saving category ids
      const result =
        await prisma.$queryRaw`SELECT id FROM "Category" WHERE "mainCategory" = 'Savings';`
      const categoryIds = result.map(({ id }) => id)

      // Basic query object, without query string

      // With query string

      // Get the current user's all saving records
      const savingRecords =
        await prisma.$queryRaw`SELECT * FROM "Record" WHERE "userId" = ${userId} AND "categoryId" IN (${Prisma.join(
          categoryIds
        )});`

      res.json(savingRecords)
    } catch (error) {
      next(error)
    }
  },
}

module.exports = recordController
