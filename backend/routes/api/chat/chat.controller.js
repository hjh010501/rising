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

    const content = req.body
    
    const user = req.decoded.id

    // create a new user if does not exist
    
    const create = (chat) => {
            return Chat.create(req.decoded.id, req.body.content)
        
    }

    // respond to the client
    const respond = () => {
        res.json({
            message: 'uploaded.',
        })
    }

    // run when there is an error (username exists)
    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    // check username duplication
    User.findOneById(user)
    .then(create)
    .then(respond)
    .catch(onError)
}

/*
    GET /api/chat/load
    {
        null
    }
*/

exports.load = (req, res) => {

    Chat.find({}).exec()
    .then(
        chats=> {
            res.json({chats})
        }
    )
}