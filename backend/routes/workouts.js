const express = require('express');
const Workout = require('../models/workoutModel')

const router = express.Router();

router.get("/",(req,res)=>{
    res.json({missg:"Git all workouts"});
});

router.get("/:id",(req,res)=>{
    res.json({missg:"Get a single workout"});
});

router.post("/",async (req,res)=>{
    const {title, load ,reps} =req.body

    try{
        const workout =await Workout.create({title,load,reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error:error.missage});
    }
});
router.patch("/:id",(req,res)=>{
    res.json({missg:" Update a workout"});
});
router.delete("/:id",(req,res)=>{
    res.json({missg:"delete a workout"});
});


module.exports = router;
