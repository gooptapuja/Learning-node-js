const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const menuItemshema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    taste:{
        type:String,
        enum:["sweet","sour","spicy"],
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:String,
        default:[],
    },
    num_sales:{
        type:Number,
        default:0,
    }
});

const  MenuItem= mongoose.model('MenuItem',menuItemshema);
module.exports = MenuItem
