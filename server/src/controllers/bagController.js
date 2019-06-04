const Products = require('../models/Products');
const get = require('lodash/get');


exports.get = (req, res, next) => {
    let bag = [];
    if (bag) {
        bag = req.session.bag
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(bag);
};

exports.post = (req, res, next) => {
    const product = Products.getById(req.body.productId);
    const item = {
        productId: get(product, "id"),
        quantity: 1,
        price: get(product, "price"),
        image: get(product, "image")
    }
    if(req.session.bag) {
        req.session.bag.push(item)
    } else {
        req.session.bag = [];
        req.session.bag.push(item);
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(req.session.bag);
};


exports.delete = (req, res, next) => {
    const id = req.params.productId;
    bag = [];
    if(req.session.bag) {
        bag = req.session.bag.filter(b => b.productId !== id);
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(bag);
};