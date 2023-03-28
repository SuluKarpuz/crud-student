const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    surname : {
        type: String,
        required: true,
    },
    midterm : {
        type: Number,
        required: true,
    },
    final : {
        type: Number,
        required: true,
    },

    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;