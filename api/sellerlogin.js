const express = require("express");
const sellerSchema = require('../module/seller');
const sellerLoginroute = express.Router();

sellerLoginroute.route("/").get(async(req,res)=>{
    const{ email,password} =req.body;
   
    const seller = sellerSchema.findOne({email:email})
    .then((userExist) => {
        // console.log(userExist)
        if (!userExist) { 
          return res.status(422).json({ error: "Invalid Email" });
        }
        if (userExist.password !== password) {
          return res.status(422).json({ error: "Invalid Password" });
        }
        if (userExist.isseller) {
          console.log("this is a seller account");
        }
        res.status(201).json({ message: "User logged in successfully" }); 
      })
      .catch((err) => {
        console.log(err);
      });
  });

  module.exports = sellerLoginroute;
      