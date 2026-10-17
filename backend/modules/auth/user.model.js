const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        requires:true
    },
    password:{
        type:String,
        required:true
    },
    service_role:["police", "temple", "medical", "water", "food", "sanitation", "accomudation", "volunteer"]
});

const User = mongoose.model("User", userSchema);

module.exports = User;