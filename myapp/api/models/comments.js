var mongoose = require('mongoose')
const { get } = require('../routes')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  _id: {type: String},
  comment: {type: String}
})

// Export Models
module.exports = mongoose.model('Comment', CommentSchema)