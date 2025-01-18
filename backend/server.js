require("dotenv").config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

//express app
const app = express();

//Midlleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

//Routes
app.use(express.json());

app.use("/api/workouts",workoutRoutes);

//listen for request
app.listen(process.env.PORT,()=>{
    console.log("Hello request");
    console.log("Hello request2");
});