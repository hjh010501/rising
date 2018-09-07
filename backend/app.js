/* =======================
    LOAD THE DEPENDENCIES
==========================*/
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')


/* =======================
    LOAD THE CONFIG
==========================*/
const config = require('./config')
const port = process.env.PORT || 9999 


/* =======================
    SOCKETIO CONFIGURATION
==========================*/

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('login', function(data) {
        console.log(data);
    })
})

/* =======================
    EXPRESS CONFIGURATION
==========================*/

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// print the request log on console
app.use(morgan('dev'))

// set the secret key variable for jwt
app.set('jwt-secret', config.secret)

// index page, just for testing
app.get('/', (req, res) => {
    res.send('rising restful api server')
})

// configure api router
app.use('/api', require('./routes/api'))

// open the server
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})

/* =======================
    CONNECT TO MONGODB SERVER
==========================*/

mongoose.connect(config.mongodbUri, { useNewUrlParser: true, })
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})