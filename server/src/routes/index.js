
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    sess=req.session;
});

module.exports = router;


