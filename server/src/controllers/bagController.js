'use strict';

const Products = require('../models/Products');
const get = require('lodash/get');

const createObjectReturn = (bag) =>  {
    return {
        data: bag
    }
}

exports.get = (req, res, next) => {
    
    let bag = [];
    
    if (req.session.bag) {
        bag = req.session.bag;
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(createObjectReturn(bag));
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

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(createObjectReturn(item));
};


exports.delete = (req, res, next) => {
    
    const objectReturn = {
        productId: req.params.id
    };
    
    let bag = [];

    if(req.session.bag) {
        bag = req.session.bag.filter(b => b.productId !== objectReturn.productId);
    }
    
    req.session.bag = bag;

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(createObjectReturn(objectReturn));
};