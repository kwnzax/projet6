const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/multer-config');
const bookCrtl = require('../controllers/books')

router.post('/', auth, bookCrtl.createBook);
router.get('/', auth, multer, bookCrtl.getAllBooks);
router.get('/bestrating', auth, bookCrtl.getOneBook);
router.get('/:id', auth, bookCrtl.getOneBook);
router.put('/:id', auth, multer, bookCrtl.modifyBook);
router.delete('/:id', auth, bookCrtl.deleteBook);


module.exports = router;