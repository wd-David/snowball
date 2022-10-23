const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const generateUsers = async function main() {
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: `a${i}@dummy.com`,
        password: await bcrypt.hash('12345678', 10),
      },
    })
  }
}

module.exports = generateUsers
