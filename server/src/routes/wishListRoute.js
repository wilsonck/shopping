const express = require('express');
const router = express.Router();
const wishListController = require('../controllers/wishListController')

router.get('/', wishListController.get);
router.delete('/', wishListController.delete);
router.post('/', wishListController.post);

module.exports = router;