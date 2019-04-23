var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./postController');

router.param('id', controller.params);

router
  .route('/')
  .get((req, res, next) => {
    next();
  }, controller.get)
  .post(controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;
