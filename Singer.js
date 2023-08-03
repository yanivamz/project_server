const mongoose = require('mongoose');

const singerSchema = mongoose.Schema(
    {
        name: String,
        age: Number
    }
);

module.exports = mongoose.model('Singer', singerSchema);