const express =require('express');
const { body, validationResult } = require('express-validator');
const User=require('../models/User');
const router=express.Router();

router.post('/createUser',[
    body('name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min: 5})
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      
    
    let user=await User.findOne({email: req.body.email});
    if (user){
      return res.status(400).json({error: "User with this email allready exits"})
    }
     user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      
      // .then(user => res.json(user)).catch(err=>{console.log(err)
      // res.json({error:'please enter a unique value for email',message :err.message})})
      // res.json({"Done":"User created"})
      res.json(user)
    }

      catch (error) {
      console.log(error.message)
      res.status(500).send("Error occured")
      }
})

module.exports=router