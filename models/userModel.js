const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:[true, 'user name is require']
    },
    email:{
        type:String,
        require:[true, 'email is require'],
        uniqe:true
    },
    password:{
        type:String,
        require:[true, 'password is require']
    },
    address:{
        type:Array
    },
    phone:{
        type:String,
        require:[true, 'phone number is require']
    },
    userType:{
        type:String,
        require:[true, 'user type is require'],
        default:'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://uxwing.com/user-male-icon/'
    }
},{
    timestamps:true
});

//export
module.exports = mongoose.model('User', userSchema);