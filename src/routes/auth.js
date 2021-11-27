const express=require("express");
const router=express.Router();
const { body, validationResult } = require('express-validator');
const User=require('../models/User');
const { findOne } = require("../models/User");

//Create new user using post method
router.post("/",[
        body('email','Enter a valid email').isEmail(),
    ],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body.email);
    let user=User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"Email already exist!"});
    }
    user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
    //   .then(user => res.json(user)).catch((err)=>{
    //     res.send({error:"Invalid Input"})
    //     console.log({error:"Invalid Input"})
    //   });

    // const user=new User(req.body);
    // user.save();
})

module.exports=router;