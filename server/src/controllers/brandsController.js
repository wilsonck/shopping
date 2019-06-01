const fs = require('fs');

exports.get = (req, res, next) => {
    const brands = JSON.parse(fs.readFileSync(__dirname + '/data/brands.json').toString());
    res.status(200).send(brands);
};
