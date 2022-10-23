const { PrismaClient } = require('@prisma/client')

const categoriesSeeder = require('./seed-categories')
const usersSeeder = require('./seed-users')
const recordsSeeder = require('./seed-records')

const prisma = new PrismaClient()

async function main() {
  // user and category both have one to many relationship to record
  // for preventing error happens, clear record table before other tables
  await prisma.record.deleteMany({})
  await prisma.user.deleteMany({})
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
