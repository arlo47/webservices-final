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
I also decided to use a url query as my search term. mongodb has a very handy text index which can be used for searching through collections. This text index will remove all generic words like 'and', 'or' and 'the' and include all non generic words when doing a search using the $text and $search operators. Therefore I created a compound text index which includes the name, description and cat fields, allowing me to search all 3 fields in a single query.

When adding search functionality, the above route function changed to this:

```javascript
app.get('/products', (req, res) => {

    const limit = parseInt(req.query.limit) || 3;       // this is the number of products per page
    const skip = parseInt(req.query.skip) || 1;         // this is the current page
    const search = req.query.search;

    // if search query exists, run this
    if (search) {
        return Product.find({
            // specify we are searching a text index
            $text: {
                $search: search     // the search term
            }
        })
            .limit(limit)
            .skip(skip)
            .then(products => res.status(200).send(products))
            .catch(err => res.status(500).send(err));
    }

    Product.find()
        .limit(limit)
        .skip(skip)
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
});
```

[logo]: ./img/search-intel.jpg "searching"