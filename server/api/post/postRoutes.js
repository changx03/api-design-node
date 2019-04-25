var router = require('express').Router();
var controller = require('./postController');
const auth = require('../../auth/auth');

const checkUser = [auth.decodeToken(), auth.getUserById()];

router.param('id', controller.params);

router
  .route('/')
  .get((req, res, next) => {
    next();
  }, controller.get)
  .post(checkUser, controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete);

/**
 * TODO: What if user is deleted, what will happen to the posts from this user?
 * Mongo won't update it
 */

module.exports = router;
