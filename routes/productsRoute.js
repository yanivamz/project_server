const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    const allProducts = await db.getAllProducts();
    res.json(allProducts);
});

module.exports = router;