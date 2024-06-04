const mongoose = require('mongoose');

const vegeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    varity:{
        type: String,
        enum:['Desi','Hybrid'],
        require: true,
        default: "Desi"
    },
    color:{
        type: String,
        default:"green"
    },
    price:{
        type : Number,
        default:20
    }

})

const Vegetable = mongoose.model("Vegetable",vegeSchema);

module.exports = Vegetable;