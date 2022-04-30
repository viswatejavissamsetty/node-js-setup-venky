const mongoose = require("mongoose");
const db = require("../connections/dbConnection");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
