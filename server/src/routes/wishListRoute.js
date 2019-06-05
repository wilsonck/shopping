const express = require('express');
const router = express.Router();
const wishListController = require('../controllers/wishListController')

router.get('/', wishListController.get);
router.delete('/:id', wishListController.delete);
router.post('/', wishListController.post);

module.exports = router;