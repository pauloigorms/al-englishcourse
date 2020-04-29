const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: {type: String, required: true},
  pic: {type: String, required: true},
  living: {type: String},
  comment: {type: String, required: true},
  status:{type: Boolean, required: true}
})

schema.set('toJSON', { virtuals: true })
module.exports = mongoose.model('comments', schema)
