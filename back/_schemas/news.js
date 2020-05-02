const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  date_register: {type: Date, default: Date.Now}
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('news', schema)