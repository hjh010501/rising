const router = require('express').Router()
const controller = require('./chat.controller')

router.get('/load', controller.load)
router.post('/upload', controller.upload)



module.exports = router