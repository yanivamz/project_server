const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    const allOrders = await db.getAllOrders();
    res.json(allOrders);
});

module.exports = router;

