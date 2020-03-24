const mongoose = require('mongoose');
const { Schema } = require('mongoose');

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
    cat: {
        type: String,
        enum: ['CPU', 'GPU'],
        required: true
    }
});

// Create Text Index for Schema
//productSchema.index({ name: 'text', description: 'text', category: 'text' });

module.exports = productSchema;
