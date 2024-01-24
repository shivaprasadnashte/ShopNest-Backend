const express = require("express");
const loginrouter = express.Router();
const User = require("../module/user");

loginrouter.route("/").get(async (req, res) => {
  const { email, password } = await req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  User.findOne({ email: email })
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

module.exports = loginrouter;
