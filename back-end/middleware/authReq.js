const passport = require('../config/passport')

function authenticateUser(req, res, next) {
  const callbackFn = (error, user) => {
    if (error || !user) {
      return res.status(401).json({ message: 'Unauthorized request' })
    }

    req.user = user
    next()
  }

  passport.authenticate('jwt', { session: false }, callbackFn)(req, res, next)
}

module.exports = { authenticateUser }
