const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: String,
        phone: String
        
    }
);

module.exports = mongoose.model('User', userSchema);