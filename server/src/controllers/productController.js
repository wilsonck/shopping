// 'use strict';
//Lodash
const orderBy = require('lodash/orderBy');
const get = require('lodash/get');

//Models
const Products = require('../models/Products');
const Brands = require('../models/Brands');

//Import Pagination
const { Pagination, noPagination } = require('../helpers/pagination');

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
 * 
 * @param {*} products 
 * @param {*} totalProducts 
 */
const createObjectReturn = (products, totalProducts) =>  {
    return {
        data: products,
        meta: {
            total: totalProducts
        }
    }
}

/**
 * Get products
 */
exports.get = (req, res, next) => {
    let productsFiltred = getProducts();
    
    const totalProducts = productsFiltred.length;

    if(req.query.brandId) {
        const brandId = req.query.brandId
        productsFiltred = productsFiltred.filter( p => p.brandId == brandId);
    }

    if(['asc','desc'].includes(req.query.orderPrice)) {
        const orderPrice = req.query.orderPrice
        productsFiltred = orderBy(productsFiltred, ['price'], [orderPrice.toLowerCase()])
    }

    const pageSize = get(req.query, "pageSize", null);
    //Check if necessary to do pagination
    if(pageSize && pageSize !== noPagination && productsFiltred.length > pageSize) {
        productsFiltred = Pagination(productsFiltred, Number(get(req.query, "page")), pageSize)
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(createObjectReturn(productsFiltred, totalProducts));
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