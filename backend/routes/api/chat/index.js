const router = require('express').Router()
const controller = require('./chat.controller')
const authMiddleware = require('../../../middlewares/auth')

router.use('/load', authMiddleware)
router.use('/upload', authMiddleware)

router.get('/load', controller.load)
router.post('/upload', controller.upload)



module.exports = router