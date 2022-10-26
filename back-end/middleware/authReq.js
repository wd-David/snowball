const passport = require('../config/passport')

function authenticateUser(req, res, next) {
  const callbackFn = (error, user) => {
    if (error || !user) {
      return res.json({ message: 'Unauthorized request' })
    }

    if (user) return (req.user = user)
    next()
  }

  passport.authenticate('jwt', { session: false }, callbackFn)(req, res, next)
}

module.exports = { authenticateUser }
