const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')
let express = require('express')
let router = express.Router()
const personnelController = require('../controllers/personnel')




// import multer
const multer = require('multer')


// initialize multer

const DIR = 'uploads/personnel/'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const upload = multer({
    // dest:"uploads/",
      storage: storage,
      fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || 
        file.mimetype == "image/jpg" ||
         file.mimetype == "image/jpeg"||
          file.mimetype  ==="application/pdf") {
          cb(null, true)
        } else {
          cb(null, false)
          // return cb(new Error('Only .png, .jpg, .mp4 and .jpeg format allowed!')) 
        }
      },

      limits:{
      fileSize:1024*1024*5
      }
    },
    )

router.get('/', auth, personnelController.findAll)


router.post('/', [auth, isAdmin],upload.single("photo"), personnelController.create)

router.get('/:pinCode', auth, personnelController.findOne)

router.put('/:pinCode', [auth, isAdmin], personnelController.update)


router.delete('/:id', [auth, isAdmin], personnelController.delete)

module.exports = router
