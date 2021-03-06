const express = require('express');
const router = express.Router();
const attractionsCtrl = require('../../controllers/attractions');
const multer  = require('multer')
const upload = multer(); // <- handles multipart/formdata requests(photos)

// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), attractionsCtrl.create);
router.get('/', attractionsCtrl.index)
router.get('/:id', attractionsCtrl.show);
router.delete('/:id', attractionsCtrl.delete);


/*---------- Protected Routes ----------*/

module.exports = router;