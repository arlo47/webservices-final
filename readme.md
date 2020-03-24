# Final Exam Research

## Pagination
Mongoose's limit() and skip() methods make pagination quite easy, I decided to pass in limit and page via url query, while giving backup default values.

```javascript
app.get('/products', (req, res) => {

    const limit = parseInt(req.query.limit) || 3;       // this is the number of products per page
    const skip = parseInt(req.query.skip) || 1;         // this is the current page

    Product.find()
        .limit(limit)
        .skip(skip)
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
});
```

## Searching
https://docs.mongodb.com/manual/text-search/