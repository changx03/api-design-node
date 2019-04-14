var mongoose = require('mongoose')
var Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('category', CategorySchema)
