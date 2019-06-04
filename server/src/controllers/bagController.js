const Products = require('../models/Products');
const get = require('lodash/get');


exports.get = (req, res, next) => {
    let bag = [];
    if (req.session.bag) {
        bag = req.session.bag
    }

    const objectReturn = {
        data: bag
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(objectReturn);
};

exports.post = (req, res, next) => {
    const product = Products.getById(req.body.productId);
    const item = {
        productId: get(product, "id"),
        name: get(product, "subtitle"),
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

    const objectReturn = {
        data: req.session.bag
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(objectReturn);
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