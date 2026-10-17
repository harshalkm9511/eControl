const express = require("express");
require("dotenv").config();
const app = express();
const connectDb = require("./config/db");


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    connectDb();
});

module.exports = app;