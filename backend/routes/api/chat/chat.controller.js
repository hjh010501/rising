const jwt = require('jsonwebtoken')
const config = require('../../../config')
const User = require('../../../models/user')
const Chat = require('../../../models/chat')

/*
    POST /api/chat/upload
    {
        content
    }
*/

exports.upload = async (req, res) => {

    const content = req.content
    const p = await jwt.verify(req.token, config.secret)
    await new Chat({
        id: p.id,
        content: req.content
    }).save()
}

/*
    GET /api/chat/load
    {
        null
    }
*/

exports.load = (req, res) => {

    const user = 'test'

        Chat.find({}, '-date').exec()
        .then(
            chats=> {
                res.json({chats})
            }
        )
}