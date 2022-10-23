const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const userController = {
  // user log in
  logIn: async (req, res, next) => {
    try {
      // #swagger.tags = ['User']
      const { email, password } = req.body
      if (!email || !password) return res.json('missing email or password')

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
      user ? user : res.json('incorrect email or unregistered email')

      const isMatched = await bcrypt.compare(password, user.password)
      isMatched
        ? res.json('successfully log in')
        : res.json('incorrect email or unregistered email')
    } catch (error) {
      next(error)
    }
  },

  // user register
  register: async (req, res, next) => {
    try {
      // #swagger.tags = ['User']
      const { email, password } = req.body
      if (!email || !password) return res.json('missing email or password')

      const userData = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })

      userData
        ? res.json('this email has been registered')
        : await prisma.user.create({
            data: { email, password: await bcrypt.hash(password, 10) },
          })

      res.json('successfully register')
    } catch (error) {
      next(error)
    }
  },
}

module.exports = userController
