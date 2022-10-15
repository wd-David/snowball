const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const prisma = new PrismaClient()

// async function: find all users

// async function find all categories

const generateExpenseRecords = async function main() {
  const userIds = await prisma.user.findMany({
    select: {
      id: true,
    },
  })

  const subcategoryIds = await prisma.category.findMany({
    select: {
      id: true,
    },
  })

  for (const userId of userIds) {
    for (const subcategoryId of subcategoryIds) {
      await prisma.expenseRecord.createMany({
        data: [
          {
            title: faker.commerce.productName(),
            amount: Number(faker.commerce.price(1, 777, 0)),
            note: faker.company.bs(),
            userId: userId.id,
            categoryId: subcategoryId.id,
          },
          {
            title: faker.commerce.productName(),
            amount: Number(faker.commerce.price(1, 777, 0)),
            note: faker.company.bs(),
            userId: userId.id,
            categoryId: subcategoryId.id,
          },
          {
            title: faker.commerce.productName(),
            amount: Number(faker.commerce.price(1, 777, 0)),
            note: faker.company.bs(),
            userId: userId.id,
            categoryId: subcategoryId.id,
          },
        ],
      })
    }
  }
}

generateExpenseRecords()

module.exports = generateExpenseRecords
