const mongoose = require("mongoose");

module.exports = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
    }catch(err){
        console.log(err);
    }
};

