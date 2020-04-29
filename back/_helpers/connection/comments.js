const config = require('_bin/config.json')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || config.mongo_connection, { useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology: true })
mongoose.Promise = global.Promise

module.exports = { Comments: require('_schemas/comments') }