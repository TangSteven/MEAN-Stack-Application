const mongoose = require('mongoose');

const userSchema = mongoose.Schema( { //model schema with contraints
    "user": {
        type: String,
        required: true,
        unique: true
    },
    "pass" : {
        type: String,
        required: true,
        unique: true
    },
    "foods" : [{
        "name": {
            type:String
        },
        "calories": {
            type: Number
        },
        "favorite": {
            type: Boolean,
            default: false,
            
        },
        "image": {
            type:String
        }
    }]
})

const userModel = mongoose.model("user", userSchema);
//creating model based off of schema

module.exports = userModel;