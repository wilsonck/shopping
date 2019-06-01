const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/brandsController')

router.get('/', brandsController.get);

module.exports = router;