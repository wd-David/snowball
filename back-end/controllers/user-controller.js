const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const userController = {
  // User log in
  // URL: post /users/logIn
  logIn: async (req, res, next) => {
    // Check if there are email and password in req.body
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json(`missing user's email or password`)

    try {
      // Check if the current user has registered an account
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })

      if (!user)
        return res
          .status(400)
          .json(
            'Incorrect email address or this user has not registered an account.'
          )

      // Sign a token
      const token = jwt.sign(req.user, process.env.JWT_SECRET, {
        expiresIn: '7d',
      })

      return res.status(200).json({
        token,
      })
    } catch (error) {
      next(error)
    }
  },

  // User register an account
  // URL: post /users/register
  register: async (req, res, next) => {
    try {
      const { email, password } = req.body
      if (!email || !password)
        return res.status(400).json('missing email or password')

      // Check if the email address has been registered
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
      if (!user) {
        await prisma.user.create({
          data: { email, password: await bcrypt.hash(password, 10) },
        })
      } else if (user) {
        return res.status(400).json('this email has been registered')
      }

      return res.status(201).end()
    } catch (error) {
      next(error)
    }
  },
}

module.exports = userController
