const { Prisma, PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({ log: ['query'] })

const categoryController = {
  // Get all categories
  // URL: /categories
  getCategories: async (req, res, next) => {
    try {
      const categories = await prisma.category.findMany()

      res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  },
}

module.exports = categoryController
