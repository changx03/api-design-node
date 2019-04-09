// TODO: make a new router for the tigers resource
// and make some REST routes for it, exactly like for tigers
// make a middleware that just logs the word 'tiger' to the console
// when a request comes in to the server

var tigerRouter = require('express').Router()
const _ = require('lodash')

var tigers = []
var id = 0

var updateId = function (req, res, next) {
  if (!req.body.id) {
    id++
    req.body.id = id + ''
  }
  next()
}

tigerRouter.param('id', function (req, res, next, id) {
  var todo = _.find(todos, { id: id })

  if (todo) {
    req.todo = todo
    next()
  } else {
    res.send()
  }
})

tigerRouter
  .route('/')
  .get(function (req, res) {
    res.json(tigers)
  })
  .post(updateId, function (req, res) {
    var lion = req.body

    tigers.push(lion)

    res.json(lion)
  })

tigerRouter
  .route('/:id')
  .get(function (req, res) {
    var lion = req.todo
    res.json(lion || {})
  })
  .put(function (req, res) {
    var update = req.body
    if (update.id) {
      delete update.id
    }

    var lion = _.findIndex(tigers, { id: req.params.id })
    if (!tigers[lion]) {
      res.send()
    } else {
      var updatedLion = _.assign(tigers[lion], update)
      res.json(updatedLion)
    }
  })

module.exports = tigerRouter
