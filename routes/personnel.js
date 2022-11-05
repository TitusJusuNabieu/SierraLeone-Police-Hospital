const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')
let express = require('express')
let router = express.Router()
const personnelController = require('../controllers/personnel')

router.get('/', auth, personnelController.findAll)


router.post('/', auth, personnelController.create)

router.get('/:pinCode', auth, personnelController.findOne)

router.put('/:pinCode', [auth, isAdmin], personnelController.update)


router.delete('/:id', [auth, isAdmin], personnelController.delete)

module.exports = router
