const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const prisma = new PrismaClient()

// async function: find all users

// async function find all categories

const generateRecords = async function main() {
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
      await prisma.record.createMany({
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
            // createdAt: faker.date.between('2021-01-01T00:00:00.000Z', '2022-12-31T00:00:00.000Z')
            createdAt: faker.date.birthdate({
              min: 2021,
              max: 2022,
              mode: 'year',
            }),
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

module.exports = generateRecords
