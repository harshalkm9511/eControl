const express = require("express");
const app = require("./server");

const authRouter = require("./modules/auth/user.router"); 

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api/auth", authRouter);
app.get("/", (req, res)=>{
    res.send("server is running on port 3000");
});