'use strict';
//Lodash
const orderBy = require('lodash/orderBy');
const get = require('lodash/get');
//Models
const Products = require('../models/Products');
const Brands = require('../models/Brands');

//Const Pagination
const defaultPageSize = 6;
const page = 1;
const noPagination = -1;


/**
 * Method get all products and add Brand to request
 */
const getProducts = () => {
    const allProduct =  Products.getAll();
    allProduct.forEach(prod => {
        prod.brand = get(Brands.getById(prod.brandId), "name");
    });
    return allProduct;
}

/**
 * Get products
 */
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

    const pageSize = get(req.query, "pageSize", defaultPageSize);

    //Check if necessary to do pagination
    if(pageSize && pageSize !== noPagination && productsFiltred.length > pageSize) {
        const actualPage = Number(req.query.page || page);
        const startData = (actualPage -1) * pageSize;
        const finalData = actualPage * pageSize;
        productsFiltred = productsFiltred.slice(startData, finalData);
    }
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(productsFiltred);
};

/**
 * Get products by ID
 */
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