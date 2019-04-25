var morgan = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');
// const overrirde = require('method-override');

// setup global middleware here
module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  // app.use(overrirde())
};
