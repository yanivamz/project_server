const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: String,
        category:String,
        price: Number,
        image: String 
//categoryID: mongoose.SchemaType.objectId
    }
);

module.exports = mongoose.model('Product', productSchema);