const mongoose = require('mongoose');

/** MongoDB Database Model */
var schema = new mongoose.Schema({
    id1:String,
    name:String,
    gender: {
        type: String,
        unique: false,
        sparse: true,
    },
    nric:String,
    paymentMethod:String,
    basicSalary:String,

   
})

const Userdb = mongoose.model('Userdb',schema);

module.exports = Userdb;