var User = require('../api/user/userModel');
var auth = require('./auth');

exports.signin = function(req, res, next) {
  // req.user will be there from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
  const token = auth.signToken(req.user._id);
  res.json({ token });
};
