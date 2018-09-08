const jwt = require('jsonwebtoken')
const User = require('../../../models/user')
const Chat = require('../../../models/chat')

/*
    POST /api/chat/upload
    {
        content
    }
*/

exports.upload = (req, res) => {

    const content = req.content
    
    const user = 'test'

    const create = (chat) => {
        return Chat.create('test', req.content)
    }

    User.findOneById(user)
    .then(create)
}

/*
    GET /api/chat/load
    {
        null
    }
*/

exports.load = (req, res) => {


    const user = 'test'

    const respond = (chats) => {
        return chats
    }

    if(User.findOneById(user)) {
        Chat.find({}).exec()
        .then(respond)
    } 
}