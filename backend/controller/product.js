const express = require('express');
const router = express.Router();
const data =require("./products");
//var prods=require('./products.json');


data=data['data'];
router.get('/all',(req,res)=>{
      res.status(200).json(data);
});
router.get('/:id',(req,res)=>{
      //get user details
      
      //check if user already exist
      //if user exist respond accordingly
      //add user to file 
});
router.post('/product',(req,res)=>{
      //get user details

      let user=data.filter((prd)=>{prd == req.body.email}) 
      if(!user)
      {
            user= req.body;
            user.id=Math.floor(Math.random() * 6) + 1;      
            data.push(user);
            res.status(200).json(user);
      }
      //check if user already exist
      //if user exist respond accordingly
      //add user to file 
});
router.post('/forgotPassword',(req,res)=>{
      //get user details
      //check if user already exist
      //if user exist respond accordingly
      //add user to file 
});

module.exports={
      router
}