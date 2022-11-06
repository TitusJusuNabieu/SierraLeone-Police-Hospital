const auth = require('../middleware/auth')
const isDoctor = require('../middleware/isDoctor')
let express = require('express')
let router = express.Router()
const DoctorsCommentController = require('../controllers/doctorsComment')

router.get('/', auth, DoctorsCommentController.findAll)

router.post('/', [auth, isDoctor], DoctorsCommentController.create)

router.get('/:id', auth, DoctorsCommentController.findOne)

router.put('/:id', [auth, isDoctor], DoctorsCommentController.update)

router.delete('/:id', [auth, isDoctor], DoctorsCommentController.delete)

module.exports = router
