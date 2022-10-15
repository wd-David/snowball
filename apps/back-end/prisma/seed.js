const { PrismaClient } = require('@prisma/client')

const categoriesSeeder = require('./seed-categories')
const usersSeeder = require('./seed-users')
const expenseRecordsSeeder = require('./seed-expense-records')

const prisma = new PrismaClient()

async function main() {
  // await prisma.user.deleteMany({})
  // await prisma.expenseRecord.deleteMany({})
  // await prisma.category.deleteMany({})

  await categoriesSeeder()
  await usersSeeder()
  await expenseRecordsSeeder()
}

main()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
