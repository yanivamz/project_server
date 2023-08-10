const mongoose = require('mongoose');

const categorytSchema = mongoose.Schema(
    {
        name: String
    }
);

module.exports = mongoose.model('Category', categorytSchema);