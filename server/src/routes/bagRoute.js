const express = require('express');
const router = express.Router();
const bagController = require('../controllers/bagController')

router.get('/', bagController.get);
router.post('/', bagController.post);
router.delete('/:id', bagController.delete);
// router.get('/:id', bagController.getById);
// router.put('/:id', productController.put);

module.exports = router;