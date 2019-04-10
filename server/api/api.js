var router = require('express').Router();

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below
const userRouter = require('./user/userRoutes')
const catRouter = require('./category/categoryRoutes')
const postRouter = require('./post/postRoutes')

router.use('/users', userRouter);
router.use('/categories', catRouter);
router.use('/posts', postRouter);

module.exports = router;
