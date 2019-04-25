var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  // dont store the password as plain text
  password: {
    type: String,
    required: true
  }
});

// middleware that will run before a document
// is created
UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();
  this.password = this.encryptPassword(this.password);
  next();
});

UserSchema.methods = {
  // check the passwords on sign in
  authenticate: function(plainPwd) {
    return bcrypt.compareSync(plainPwd, this.password);
  },
  // hash the passwords
  encryptPassword: function(plainPwd) {
    if (!plainPwd) {
      return '';
    } else {
      var salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainPwd, salt);
    }
  }
};

module.exports = mongoose.model('user', UserSchema);
