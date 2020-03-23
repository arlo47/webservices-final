const mongoose = require('mongoose');
const productSchema = require('../schemas/product');
require('../database');

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
