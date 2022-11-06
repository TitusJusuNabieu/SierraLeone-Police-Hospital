const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')
let express = require('express')
let router = express.Router()
const DependantController = require('../controllers/dependant')

router.get('/', auth, DependantController.findAll)

router.post('/', [auth, isAdmin], DependantController.create)

router.get('/:id', auth, DependantController.findOne)

router.put('/:id', [auth, isAdmin], DependantController.update)

router.delete('/:id', [auth, isAdmin], DependantController.delete)

module.exports = router
