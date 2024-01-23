const express = require("express");
const signuprouter = express.Router();
const User = require("./module/user");

signuprouter.route('/').post( async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    pincode,
    contactNumber,
    city,
    state,
    profilePicture,
  } = await req.body;

//   if (
//     !name ||
//     !email ||
//     !password || 
//     !address ||
//     !pincode ||
//     !contactNumber ||
//     !city ||
//     !state ||
//     !profilePicture
//   ) {
//     return res.status(422).json({ error: "Please fill all the fields" });
//   }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      }
      const user = new User({
        name,
        email,
        password,
        address,
        pincode,
        contactNumber,
        city,
        state,
        profilePicture,
      });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered successfully" });
        })
        .catch((err) => console.log(err.message))
    })
    .catch((err) => {
      console.log(err);
    });  
});
signuprouter.route('/').get( async (req, res) => {
    const users = await User.find();
    res.json(users);
    });

signuprouter.route('/:id').get( async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
    });

signuprouter.route('/:id').delete( async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
    }   );

module.exports = signuprouter;
