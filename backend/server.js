require("dotenv").config();

const express = require('express');

//express app
const app = express();

//Midlleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

//Routes
app.get("/",(req,res)=>{
    res.json({mssg :"Welecome to the app"})
});

//listen for request
app.listen(process.env.PORT,()=>{
    console.log("Hello request");
    console.log("Hello request2");
});