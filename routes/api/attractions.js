const express = require('express');
const router = express.Router();
const attractionsCtrl = require('../../controllers/attractions');
const multer  = require('multer')
const upload = multer(); // <- handles multipart/formdata requests(photos)

// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), attractionsCtrl.create);
router.get('/', isLoggedIn, attractionsCtrl.index)
router.get('/:id', isLoggedIn, attractionsCtrl.show);
router.delete('/:id', attractionsCtrl.delete);


/*---------- Protected Routes ----------*/

function isLoggedIn(req, res, next){
  if (req.user) next();
  res.status(401).json({data: 'Not authorized. Please log in.'})
}

module.exports = router;