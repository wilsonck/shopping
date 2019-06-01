const fs = require('fs');

class Products {

  constructor() {
    this.data = JSON.parse(fs.readFileSync(__dirname + '/data/products.json').toString());
  }


  getAll() {
    return this.data;
  }

  filterBy() {

  }

}

module.exports = new Products();