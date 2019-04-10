var express = require('express')
var app = express()
var api = require('./api/api')
const errorHandler = require('./middleware/errorHandler')

// setup the app middlware
const applyMiddleware = require('./middleware/appMiddlware')
applyMiddleware(app)

// setup the api
app.use('/api/', api)

// set up global error handling
app.use(errorHandler)

// export the app for testing
module.exports = app
