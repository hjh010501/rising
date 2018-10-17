const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')

const Chat = new Schema({
    id: String,
    content: String
}, { timestamps: true })

module.exports = mongoose.model('Chat', Chat)
