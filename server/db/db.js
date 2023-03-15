//starting mongodb server
const mongoose = require('mongoose')
//establishing connection to db
const db = mongoose.connect('mongodb://127.0.0.1:27017/memorymarker')

module.exports = db