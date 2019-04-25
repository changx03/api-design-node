var router = require('express').Router();
var controller = require('./categoryController');
const auth = require('../../auth/auth')

// if receive correct token, it returns user
const checkUser = [auth.decodeToken(), auth.getUserById()]

// this returns the category id
router.param('id', controller.params);

router.route('/')
  .get( controller.get)
  .post(checkUser, controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete)

module.exports = router;
