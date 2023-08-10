const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    // const allCategoys = await db.getAllCategorys();
    //res.json(allCategoys);
    res.send("Get all workouts");
});
router.get("/:workoutId", (req, res) => {
    res.send("Get an existing workout");
});

router.post("/", (req, res) => {
    res.send("Create a new workout");
});

router.patch("/:workoutId", (req, res) => {
    res.send("Update an existing workout");
});

router.delete("/:workoutId", (req, res) => {
    res.send("Delete an existing workout");
});

module.exports = router;
