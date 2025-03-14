require("dotenv").config();

const express = require('express');
const workoutRoutes = require('./Routes/Workouts');

const mongoose = require('mongoose');
const cors = require('cors');

//express app
const app = express();

app.use(cors());

//Midlleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

//Routes
app.use(express.json());

app.use("/api/workouts",workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen( process.env.PORT || 4000,()=>{
            console.log("connect to db & listen on port ",process.env.PORT);
        });
    })
    .catch((error)=>{
        console.log(error);
    })

