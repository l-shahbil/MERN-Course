const express = require('express');
const router = express.Router();
const {getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout} = require("../controller/workoutController");

//Get all workouts
router.get("/",getWorkouts);

//get a singale workout
router.get("/:id",getWorkout);

//Create new workout
router.post("/",createWorkout);

//Update Workout
router.patch("/:id",updateWorkout);

//delete workout
router.delete("/:id",deleteWorkout);


module.exports = router;
