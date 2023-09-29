const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    role:{
        type:String,
        default:"admin"
    }
});

const Admin = mongoose.model('Admin',adminSchema);

module.exports = Admin;