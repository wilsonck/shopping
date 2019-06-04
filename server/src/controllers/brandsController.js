const fs = require('fs');
const Brands = require('../models/Brands');

exports.get = (req, res, next) => {
    let allBrands =  Brands.getAll();

    const objectReturn = {
        data: allBrands,
        meta: {
            total: allBrands.length
        }
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(objectReturn);
};