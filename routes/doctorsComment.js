const auth = require('../middleware/auth')
const isDoctor = require('../middleware/isDoctor')
let express = require('express')
let router = express.Router()
const DoctorsCommentController = require('../controllers/doctorsComment')


// import multer
const multer = require('multer')


// initialize multer

const DIR = 'uploads/doctorsDocument/'
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
        if (file.mimetype  ==="application/pdf") {
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



router.get('/', auth, DoctorsCommentController.findAll)

router.post('/', [auth, isDoctor],upload.single("attachment"), DoctorsCommentController.create)

router.get('/:id', auth, DoctorsCommentController.findOne)

router.put('/:id', [auth, isDoctor],upload.single("attachment"), DoctorsCommentController.update)

router.delete('/:id', [auth, isDoctor], DoctorsCommentController.delete)

module.exports = router
