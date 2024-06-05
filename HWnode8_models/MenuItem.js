// Lecture-5 Home-work: To add GET and POST method in MENU. 
const mongoose = require('mongoose');

const menuItem = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum:['sweet','spicy','sour'],
        required: true
    },
    is_Drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    }

})

const MenuItem = mongoose.model('MenuItem',menuItem);

module.exports = MenuItem;