const path = require("path");
const fs = require("fs");

const pathUtils = require("../utils/path");

const pathToProducts = path.join(pathUtils.rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(pathToProducts, (readErr, fileContent) => {
    if (readErr) {
      return cb([]);
    }

    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathToProducts, JSON.stringify(products), (writeErr) => {
        console.log("Write Error: ", writeErr);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
