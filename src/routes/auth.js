const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const { findOne } = require("../models/User");
const bcrypt = require('bcryptjs');

//Create new user using post method
router.post("/signup", [
    body('email', 'Enter a valid email').isEmail(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // res.send(req.body.email);
        // Find wheather user is already exist
        var user = await User.findOne({ email: req.body.email }).exec();
        console.log(user);
        if (user) {
            return res.status(400).json({ error: "Email already exist!" });
        }
        // Hash password
        var salt = bcrypt.genSaltSync(10);
        var pass_hash = bcrypt.hashSync(req.body.password, salt);
        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: pass_hash,
        });
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Bad request");
    }
    //   .then(user => res.json(user)).catch((err)=>{
    //     res.send({error:"Invalid Input"})
    //     console.log({error:"Invalid Input"})
    //   });

    // const user=new User(req.body);
    // user.save();
})

module.exports = router;