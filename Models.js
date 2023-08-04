const mongoose = require('mongoose');

const modelSchema = mongoose.Schema(
    {
        name: String,
        age: Number
    }
);

module.exports = mongoose.model('Models', modelSchema);