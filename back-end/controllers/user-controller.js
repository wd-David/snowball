const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const userController = {
  // User log in
  // URL: /user/logIn
  logIn: async (req, res, next) => {
    // Check if there are email and password in req.body
    const { email, password } = req.body
    if (!email || !password) return res.json(`missing user's email or password`)

    try {
      // Check if the current user has registered an account
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
      user
        ? user
        : res.json('Incorrect email address or this user has not registered.')

      // Sign a token
      const token = jwt.sign(req.user, process.env.JWT_SECRET, {
        expiresIn: '7d',
      })
      res.json({
        token,
      })
    } catch (error) {
      next(error)
    }
    // #swagger.tags = ['User']
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
