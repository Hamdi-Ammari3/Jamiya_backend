const mongoose = require('mongoose');

const User = mongoose.model('User',{
    first_name:String,
    last_name:String,
    phone_number:String
})

module.exports = User