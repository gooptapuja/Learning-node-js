const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        required:true,
        enum:['cheif','employee','waiter','Master']
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

// create person model

const Person = mongoose.model('Person',personSchema);
module.exports = Person;
