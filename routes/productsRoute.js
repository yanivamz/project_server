const express = require('express');
var router = express.Router();
const db = require('../db');


router.get('/', async (req, res) => {
    const allProducts = await db.getAllProducts();
    const filterProducts = (req.query.search) ?
        [...allProducts].filter(p => p.name.includes(req.query.search)) : allProducts;

    if (req.query.sort === "price_a") {
        const priceSortedProducts =
            [...filterProducts].sort((p1, p2) => p1.price - p2.price);
        res.json(priceSortedProducts);
        return
    }   
    if (req.query.sort === "price_d") {
        const priceSortedProducts =
            [...filterProducts].sort((p1, p2) => p2.price - p1.price);
        res.json(priceSortedProducts);
        return
    }
    res.json(filterProducts);
});


module.exports = router;