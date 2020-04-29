const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: {type: String, required: true},
  pic: {type: String},
  living: {type: String},
  phone: {type: String},
  email: {type: String},
  facebook: {type: String},
  instagram: {type: String},
  lattes: {type: String},
  other: {type: String},
  resume: {type: String},
  bio: {type: String},
  status:{type: Boolean, required: true}
})

schema.set('toJSON', { virtuals: true })
module.exports = mongoose.model('teachers', schema)
