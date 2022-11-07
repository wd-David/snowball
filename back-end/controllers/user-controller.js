const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const userController = {
  // User log in
  // URL: post /users/logIn
  logIn: async (req, res, next) => {
    const { email, password } = req.body

    // Check if there are email and password in req.body
    if (!email || !password)
      return res.status(400).json({
        type: 'Login failed',
        title: 'Require email or password',
        field_errors: {
          email: 'required',
          password: 'required',
        },
      })

    // Check data type of the email and password
    if (typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({
        type: 'Login failed',
        title: 'Incorrect data type',
        field_errors: {
          email: 'string',
          password: 'string',
        },
      })
    }

    try {
      // Check if the current user has registered an account
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })

      if (!user) {
        return res.status(400).json({
          type: 'Login failed',
          title: 'Incorrect email or password',
          field_errors: {
            email: 'incorrect',
            password: 'incorrect',
          },
        })
      }

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
    const { email, password } = req.body

    // Check if there are email and password in req.body
    if (!email || !password)
      return res.status(400).json({
        type: 'Register failed',
        title: 'Require email or password',
        field_errors: {
          email: 'required',
          password: 'required',
        },
      })

    // Check data type of the email and password
    if (typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({
        type: 'Register failed',
        title: 'Incorrect data type',
        field_errors: {
          email: 'string',
          password: 'string',
        },
      })
    }

    try {
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
        return res.status(400).json({
          type: 'Register failed',
          title: 'Email is used',
          field_errors: {
            email: 'used',
          },
        })
      }

      return res.status(201).end()
    } catch (error) {
      next(error)
    }
  },
}

module.exports = userController
