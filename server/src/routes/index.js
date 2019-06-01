
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    sess=req.session;
});


// const productController = require('../controllers/productController');

// router.get('/', function (req, res, next) {
//     res.status(200).send({
//         title: "Node Express API",
//         version: "0.0.1"
//     });
// });

// router.get('/products', function (req, res, next) {
//     console.log('asdasdas');
//     productController.getProducts(req, res, next);
// });


// router.use('./productsRoute')

module.exports = router;


