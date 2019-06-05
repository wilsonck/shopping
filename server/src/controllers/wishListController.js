'use strict';

const Products = require('../models/Products');
const get = require('lodash/get');

const createObjectReturn = (wishList) =>  {
    return {
        data: wishList
    }
}

exports.get = (req, res, next) => {
    
    let wishList = [];
    if (req.session.wishList) {
        wishList = req.session.wishList;
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(createObjectReturn(wishList));

};

exports.post = (req, res, next) => {

    const product = Products.getById(req.body.productId);  
    const item = {
        productId: get(product, "id"),
        name: get(product, "subtitle"),
        price: get(product, "price"),
        image: get(product, "image")
    }

    if(req.session.wishList) {
        req.session.wishList.push(item)
    } else {
        req.session.wishList = [];
        req.session.wishList.push(item);
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(createObjectReturn(item))
    
};


exports.delete = (req, res, next) => {

    const objectReturn = {
        productId: req.params.id
    };
    
    let wishList = [];

    if(req.session.wishList) {
        wishList = req.session.wishList.filter(b => b.productId !== objectReturn.productId);
    }

    req.session.wishList = wishList;
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send(createObjectReturn(objectReturn));
    
};