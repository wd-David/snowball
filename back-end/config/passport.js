const passport = require('passport')
const LocalStrategy = require('passport-local')
const passportJWT = require('passport-jwt')
const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

// Strategy: local
passport.use(
  new LocalStrategy(
    // User field
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false,
    },

    // Authenticate current user
    async (req, email, password, callbackFn) => {
      // Find the current user
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })

      // Error happened while finding this user
      // if (error) return done(error)

      // Not finding this user's account
      if (!user) return callbackFn(null, false)

      // User's account exists
      // Check if the password is the same as the one in database with bcrypt
      bcrypt.compare(password, user.password).then((res) => {
        // Wrong password: password !== user.password
        if (!res) return callbackFn(null, false)

        // Right password: pass authenticate and return user data
        return callbackFn(null, user)
      })
    }
  )
)

// Strategy: JWT
// Take out JWT from authorization header, bearer
const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
}

passport.use(
  new JWTStrategy(jwtOptions, async (jwtPayload, callbackFn) => {
    try {
      const user = await prisma.findUnique({ where: { id: jwtPayload.id } })

      return callbackFn(null, user)
    } catch (error) {
      callbackFn(error)
    }
  })
)

module.exports = passport
