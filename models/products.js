const productModel = require("../schemas/products.schema");

function addProduct(product) {
  return productModel.create(product);
}

module.exports = { addProduct };
