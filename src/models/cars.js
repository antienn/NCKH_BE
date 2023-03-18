const mongoose = require("mongoose");

const Car = new mongoose.Schema({
    licensePlate:{
        type: String,
        require:true,
        trim:true,
    },
    date: {
        type: String,
        maxlength: 10,
        require:true,
        trim:true,
    },
    speed:{
        type:Number,
        require:true,
        trim:true,
    },
    urlimage:{
        type:String,
        require:true,
        trim:true,
    }
})

module.exports = new mongoose.model('car',Car);