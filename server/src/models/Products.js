const AbstractModels = require('./AbstractModels');

class Product extends AbstractModels {
  constructor() {
      super("products");
  }
}

module.exports = new Product();