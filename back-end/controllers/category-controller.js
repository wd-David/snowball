const { Prisma, PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({ log: ['query'] })

const categoryController = {
  // Get all categories
  // URL: get /categories
  getCategories: async (req, res, next) => {
    try {
      const categories = await prisma.category.findMany()

      return res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  },
}

module.exports = categoryController
