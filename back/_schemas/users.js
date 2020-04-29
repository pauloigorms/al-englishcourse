const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  status: {type: Boolean, required: true}
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('users', schema)