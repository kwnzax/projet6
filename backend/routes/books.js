const express = require('express');
const router = express.Router();
const bookCrtl = require('../controllers/books')

router.post('/', bookCrtl.createBook);
router.get('/:id', bookCrtl.getOneBook);
router.put('/:id', bookCrtl.modifyBook);
router.delete('/:id', bookCrtl.deleteBook);
router.get('/', bookCrtl.getAllBooks);

module.exports = router;