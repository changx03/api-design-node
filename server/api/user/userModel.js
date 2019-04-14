var mongoose = require('mongoose')
var Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('user', UserSchema)
