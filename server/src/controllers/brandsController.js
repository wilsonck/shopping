const fs = require('fs');
const Brands = require('../models/Brands');

const createObjectReturn = (brands, totalBrands) =>  {
    return {
        data: brands,
        meta: {
            total: totalBrands
        }
    }
}

exports.get = (req, res, next) => {
    let allBrands =  Brands.getAll();

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(createObjectReturn(allBrands, allBrands.length));
};