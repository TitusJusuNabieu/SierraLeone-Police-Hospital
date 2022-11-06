const auth = require('../middleware/auth')
const isDoctor = require('../middleware/isDoctor')
let express = require('express')
let router = express.Router()
const DiagnosisController = require('../controllers/diagnosis')

router.get('/', auth, DiagnosisController.findAll)

router.post('/', [auth, isDoctor], DiagnosisController.create)

router.get('/:id', auth, DiagnosisController.findOne)

// router.put('/:id', [auth, isDoctor], DiagnosisController.update)

// router.delete('/:id', [auth, isAdmin], DiagnosisController.delete)

module.exports = router
