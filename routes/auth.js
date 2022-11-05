var express = require('express')
var router = express.Router()
const authCont = require('../controllers/auth')

router.post('/', authCont.login)

module.exports = router
