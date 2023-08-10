const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
//categoryID: mongoose.SchemaType.objectId
    }
);

module.exports = mongoose.model('Product', productSchema);