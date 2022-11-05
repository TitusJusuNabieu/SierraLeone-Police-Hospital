const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')
let express = require('express')
let router = express.Router()
const DoctorsCommentController = require('../controllers/doctorsComment')

router.get('/', auth, DoctorsCommentController.findAll)

router.post('/', auth, DoctorsCommentController.create)

router.get('/:id', auth, DoctorsCommentController.findOne)

router.put('/:id', [auth, isAdmin], DoctorsCommentController.update)

router.delete('/:id', [auth, isAdmin], DoctorsCommentController.delete)

module.exports = router
