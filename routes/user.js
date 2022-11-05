const auth = require('../middleware/auth')
var express = require('express')
var router = express.Router()
const userCont = require('../controllers/user')

router.get('/me', auth, userCont.me)

router.post('/', userCont.create)

module.exports = router
