const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', async(req, res) => {
    const allUsers = await db.getAllUsers();
    res.json(allUsers);
});

module.exports = router;
