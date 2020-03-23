const { Schema } = require('mongoose');
const Product = require('./product');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    }
});

categorySchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'category'
})

module.exports = categorySchema;
