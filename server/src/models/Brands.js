const AbstractModels = require('./AbstractModels');

class Brands extends AbstractModels {
  constructor() {
      super("brands");
  }
}

module.exports = new Brands();