const { PrismaClient } = require('@prisma/client')

const categoriesSeeder = require('./seed-categories')
const usersSeeder = require('./seed-users')
const recordsSeeder = require('./seed-records')

const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany({})
  await prisma.record.deleteMany({})
  await prisma.category.deleteMany({})

  await categoriesSeeder()
  await usersSeeder()
  await recordsSeeder()
}

main()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
