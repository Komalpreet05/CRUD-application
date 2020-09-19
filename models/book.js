const mongoose = require('mongoose');

let BookSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    zipCode:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    busNumber:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('cczz',BookSchema);