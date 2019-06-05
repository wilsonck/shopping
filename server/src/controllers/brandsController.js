'use strict';

const get = require('lodash/get');
const Brands = require('../models/Brands');

//Import Pagination
const { Pagination, noPagination } = require('../helpers/pagination');

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
    const pageSize = Number(get(req.query, "page_size", -1));
    //Check if necessary to do pagination
    if(pageSize && pageSize !== noPagination && allBrands.length > pageSize) {
        allBrands = Pagination(allBrands, Number(get(req.query, "page")), pageSize)
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).send(createObjectReturn(allBrands, allBrands.length));
};