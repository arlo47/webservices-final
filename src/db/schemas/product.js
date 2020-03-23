const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Category = require('./category');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.String,
        ref: 'Category'
    }
});

module.exports = productSchema;
