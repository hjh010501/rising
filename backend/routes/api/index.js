const router = require('express').Router()
const authMiddleware = require('../../middlewares/auth')
const auth = require('./auth')
const user = require('./user')
const chat = require('./chat')

router.use('/auth', auth)
router.use('/user', authMiddleware)
router.use('/user', user)
router.use('/chat', chat)

module.exports = router