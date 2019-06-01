const fs = require('fs');
const orderBy = require('lodash/orderBy');

const getbag = () => {
    return JSON.parse(fs.readFileSync(__dirname + '/data/products.json').toString());
}

exports.get = (req, res, next) => {
    let bag = getbag();

    if(req.query.brandId) {
        const brandId = req.query.brandId
        productsFiltred = productsFiltred.filter( p => p.brandId == brandId);
    }

    if(['asc','desc'].includes(req.query.orderPrice)) {
        const orderPrice = req.query.orderPrice
        productsFiltred = orderBy(productsFiltred, ['price'], [orderPrice.toLowerCase()])
    }

    res.status(200).send(productsFiltred);
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};


exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};