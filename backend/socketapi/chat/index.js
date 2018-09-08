const controller = require('../../routes/api/chat/chat.controller')

io.on('connection', function(socket) {
    socket.on('SEND_MESSAGE', function(data) {
        console.log(data)
        controller.upload(data)
        var messages = controller.load()
        console.log(messages)
        io.emit('MESSAGE', messages)
    });
})