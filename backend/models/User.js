// This keeps track of all the users irrespective of the roles
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    password  : {
        type : String,
        required : true
    },
    firstName  : {
        type : String,
        required : true
    },
    lastName  : {
        type : String,
        required : true
    },
    userName  : {
        type : String,
        required : true
    },
    
},{timestamps: true} );

module.exports = mongoose.model("User",userSchema);
