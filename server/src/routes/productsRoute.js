const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.get);
router.get('/:id', productController.getById);

module.exports = router;