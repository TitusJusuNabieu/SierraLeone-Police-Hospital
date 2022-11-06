const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')
var express = require('express')
var router = express.Router()
const userCont = require('../controllers/user')

router.get('/me', auth, userCont.me)

router.post('/',auth,isAdmin, userCont.create)

module.exports = router
