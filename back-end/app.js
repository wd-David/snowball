if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const passport = require('./config/passport')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./src/swagger.json')

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
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
