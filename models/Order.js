const mongoose = require('mongoose');

const orserSchema = mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: String,
        phone: String
        
    }
);

module.exports = mongoose.model('Order', orserSchema);