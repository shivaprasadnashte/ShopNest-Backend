const express = require("express");
const loginrouter = express.Router();
const User = require("../module/user");
const Signupschema = require("../module/user");

loginrouter.route("/").post(async (req, res) => {
  const response = await req.body;
  const userin = {
    email: response.email,
    password: response.password,
  };

  // console.log(Signupschema);
  await Signupschema.findOne({ email: response.email }).then((user) => {
    console.log(user);
    if (!user) {
      res.status(403).json("user not found");
    }
   else{
    if (user.password === response.password) {
      res.json(user);
    } else {
      res.status(401).json("password incorrect");
    }
   }
  } );
});
module.exports = loginrouter;
