const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')
let express = require('express')
let router = express.Router()
const path = require("path")
const DependantController = require('../controllers/dependant')


// import multer
const multer = require('multer')


// // initialize multer
const photoDIR = 'uploads/dependantsPhoto/'
const documentDIR = 'uploads/dependantsDocOfProof/'

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => { // setting destination of uploading files        
      if (file.fieldname === "picture") { // if uploading resume
        cb(null, photoDIR);
      } else { // else uploading image
        cb(null, documentDIR);
      }
    },
    filename: (req, file, cb) => { // naming file
      cb(null, file.fieldname+"-"+new Date().toISOString() +path.extname(file.originalname));
    }
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.fieldname === "documentOfProof") { // if uploading resume
      if (
        file.mimetype === 'application/pdf'
      ) { // check file type to be pdf, doc, or docx
        cb(null, true);
      } else {
        cb(null, false); // else fails
      }
    } else { // else uploading image
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) { // check file type to be png, jpeg, or jpg
        cb(null, true);
      } else {
        cb(null, false); // else fails
      }
    }
  };

  const upload =  multer(
    { 
      storage: fileStorage, 
      limits:
        { 
          fileSize:'2mb' 
        }, 
      fileFilter: fileFilter 
    }
  )


router.get('/', auth, DependantController.findAll)

router.post('/', [auth, isAdmin],upload.fields(
    [
      { 
        name: 'documentOfProof', 
        maxCount: 1 
      }, 
      { 
        name: 'picture', 
        maxCount: 1 
      }
    ]
  ),DependantController.create)

router.get('/:id', auth, DependantController.findOne)

router.put('/:id', [auth, isAdmin],upload.fields(
    [
      { 
        name: 'documentOfProof', 
        maxCount: 1 
      }, 
      { 
        name: 'picture', 
        maxCount: 1 
      }
    ]
  ), DependantController.update)

router.delete('/:id', [auth, isAdmin], DependantController.delete)

module.exports = router
