const express = require('express');
const Product = require('./db/models/product');
const Category = require('./db/models/category');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {

    const limit = parseInt(req.query.limit) || 3;       // this is the number of products per page
    const skip = parseInt(req.query.skip) || 1;         // this is the current page

    Product.find()
        .populate('category')
        .limit(limit)
        .skip(skip)
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
});

app.listen(3000, () => {
    console.log('server listening on 3000');
});