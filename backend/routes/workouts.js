const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({missg:"Git all workouts"});
});

router.get("/:id",(req,res)=>{
    res.json({missg:"Get a single workout"});
});

router.post("/",(req,res)=>{
    res.json({missg:"Post a new workout"});
});
router.patch("/:id",(req,res)=>{
    res.json({missg:" Update a workout"});
});
router.delete("/:id",(req,res)=>{
    res.json({missg:"delete a workout"});
});


module.exports = router;
