const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Expense Tracker API',
    description: 'Basic functions version',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  tags: [
    {
      name: 'User',
      description: 'Routers about users',
    },
    {
      name: 'Expense Record',
      description: 'Routers about expense records',
    },
  ],
}

const outputFile = './swagger_output.json'
const endpointsFiles = [
  './routes/modules/users.js',
  './routes/modules/expense-records.js',
]

swaggerAutogen(outputFile, endpointsFiles, doc)
