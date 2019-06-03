const fs = require('fs');
const orderBy = require('lodash/orderBy');

exports.get = (req, res, next) => {
    let bag = [];
    if (bag) {
        bag = req.session.bag
    }
    res.status(200).send(bag);
};

exports.post = (req, res, next) => {
    const item = req.body;
    if(req.session.bag) {
        req.session.bag.push(item)
    } else {
        req.session.bag = [];
        req.session.bag.push(item);
    }
    res.status(201).send(req.session.bag);
};


exports.delete = (req, res, next) => {
    const id = req.params.productId;
    bag = [];
    if(req.session.bag) {
        bag = req.session.bag.filter(b => b.productId !== id);
    }
    res.status(201).send(bag);
};