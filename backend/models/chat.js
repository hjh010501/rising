const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')

const Chat = new Schema({
    id: String,
    content: String,
    date: { type: Date, default: Date.now }
})

// create new User document
Chat.statics.create = function(id, content) {

    const chat = new this({
        id,
        content,
    })

    // return the Promise
    return chat.save()
}

module.exports = mongoose.model('Chat', Chat)