const controller = require('../../routes/api/chat/chat.controller')
const Chat = require('../../models/chat')

io.on('connection', socket => {
    Chat.find({}).exec()
        .then(chats => io.emit('MESSAGE',  JSON.stringify(chats)))
    
    socket.on('SEND_MESSAGE', data => {
        controller.upload(data)
            .then(() => Chat.find({}).exec())
            .then(chats => io.emit('MESSAGE',  JSON.stringify(chats)))

    });
})