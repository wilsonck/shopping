const orderBy = require('lodash/orderBy');
const Products = require('../models/Products');

const getProducts = () => {
    return Products.getAll();
}

const products = ({ brandId = null , id = null}) => {
    const products = getProducts();
    return products.filter(p => p);
}

exports.get = (req, res, next) => {
    let productsFiltred = getProducts();

    if(req.query.brandId) {
        const brandId = req.query.brandId
        productsFiltred = productsFiltred.filter( p => p.brandId == brandId);
    }

    if(['asc','desc'].includes(req.query.orderPrice)) {
        const orderPrice = req.query.orderPrice
        productsFiltred = orderBy(productsFiltred, ['price'], [orderPrice.toLowerCase()])
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(productsFiltred);
};

exports.getById = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send('Requisição recebida com sucesso!');
};

exports.post = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};