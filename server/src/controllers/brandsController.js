const fs = require('fs');
const Brands = require('../models/Brands');

exports.get = (req, res, next) => {
    let allBrands =  Brands.getAll();;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(allBrands);
};