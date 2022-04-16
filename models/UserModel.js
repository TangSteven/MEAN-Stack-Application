const mongoose = require('mongoose');

const userSchema = mongoose.Schema( {
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
            type: Boolean
            
        }
    }]
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;