const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();
const {getWorkouts,
    getWorkout,
    createWorkout} = require("../controller/workoutController");

//Get all workouts
router.get("/",getWorkouts);

//get a singale workout
router.get("/:id",getWorkout);

//Create new workout
router.post("/",createWorkout);

//Update Workout
router.patch("/:id",(req,res)=>{
    res.json({missg:" Update a workout"});
});

//delete workout
router.delete("/:id",(req,res)=>{
    res.json({missg:"delete a workout"});
});


module.exports = router;
