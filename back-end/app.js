if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const passport = require('./config/passport')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const routes = require('./routes')

const app = express()
const port = process.env.PORT || "8080"

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(cors())

app.use(routes)
app.listen(port)

// OpenAPI UI
app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: 'http://localhost:3000',
    },
  })
)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app
