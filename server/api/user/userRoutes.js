var router = require('express').Router();
var controller = require('./userController');
const auth = require('../../auth/auth');

const checkUser = [auth.decodeToken(), auth.getUserById()];

router.param('id', controller.params);
router.get('/me', checkUser, controller.me);

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  /** 
   * TODO: an user should not able to update other users' profile. 
   * Adding a middleware to match user.id and id 
   * */
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;
