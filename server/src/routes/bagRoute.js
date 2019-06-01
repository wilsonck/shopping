const express = require('express');
const router = express.Router();
const bagController = require('../controllers/bagController')

router.get('/', bagController.get);
// router.get('/:id', bagController.getById);
// router.post('/', productController.post);
// router.put('/:id', productController.put);
// router.delete('/:id', productController.delete);

module.exports = router;