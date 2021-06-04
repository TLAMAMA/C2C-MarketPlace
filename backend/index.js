const express = require('express');
const app= express();
const cors=require('cors');
const data =require("./controller/users.json");
const {product,user}=require('./controller/index');
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());


//app.use('/product',product);
//app.use('/user',user);


app.listen(port,()=>{
      console.log("all good on localost"+port);
      console.log(data);
});