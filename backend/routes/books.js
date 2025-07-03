const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const { upload, processImage} = require('../middleware/multer-config');
const bookCrtl = require('../controllers/books')

router.post('/', auth, upload, processImage, bookCrtl.createBook);
router.get('/', bookCrtl.getAllBooks);
router.get('/bestrating', bookCrtl.getBestRating);
router.get('/:id', bookCrtl.getOneBook);
router.put('/:id', auth, upload, processImage, bookCrtl.modifyBook);
router.delete('/:id', auth, bookCrtl.deleteBook);
router.post('/:id/rating', auth, bookCrtl.rateBook);


module.exports = router;