const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')
let express = require('express')
let router = express.Router()
const DiagnosisController = require('../controllers/diagnosis')

router.get('/', auth, DiagnosisController.findAll)

router.post('/', auth, DiagnosisController.create)

router.get('/:id', auth, DiagnosisController.findOne)

router.put('/:id', [auth, isAdmin], DiagnosisController.update)

router.delete('/:id', [auth, isAdmin], DiagnosisController.delete)

module.exports = router
