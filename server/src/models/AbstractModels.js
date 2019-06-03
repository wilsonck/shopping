const fs = require('fs');

class AbstractModel {

  constructor(nameFile) {
    this.data = JSON.parse(fs.readFileSync(__dirname + `/data/${nameFile}.json`).toString());
  }

  getAll() {
    return this.data;
  }

  filterBy() {

  }

}

module.exports = AbstractModel;