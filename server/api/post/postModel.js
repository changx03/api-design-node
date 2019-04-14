var mongoose = require('mongoose')
var Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  author: {
    type: { type: Schema.Types.ObjectId, ref: 'user' },
    required: true
  },
  categories: [{ type: Schema.Types.ObjectId, ref: 'category' }]
})

module.exports = mongoose.model('post', PostSchema)
