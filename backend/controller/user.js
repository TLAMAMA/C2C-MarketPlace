const express = require('express');
const router = express.Router();
const data =require("./users");
//var users=require('./users.json');


data=data['data'];
router.post('/login',(req,res)=>{
      //get user input details
     let uid= req.body.id;
     try{
            //check user exists
            let user=data.filter((usr)=>{
                  if(usr.id==uid)
                  {
                        res.status(200).json({"logedin":"1","user":user});
                  }else{
                        res.status(305).json({"logedin":"0"});
                  }
            });
     }catch{
           res.status(500);
           console.log('user not there');
     }
      //if user exist respond accordingly
});
router.get('/user',(req,res)=>{
      //get user details
      
      //check if user already exist
      //if user exist respond accordingly
      //add user to file 
});
router.post('/register',(req,res)=>{
      //get user details

      let user=data.filter((usr)=>{usr.email == req.body.email}) 
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