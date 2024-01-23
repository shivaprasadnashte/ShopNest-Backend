const express = require("express");
const sellerSchema = require("../module/seller");
const sellerSignupRouter = express.Router();

sellerSignupRouter.route("/").post(async (req, res) => {
  const {
    name,
    email,
    password,
    storename,
    busnesstype,
    storeaddress,
    gstin,
    pincode,
    contactNumber,
    city,
    state,
    closingtime,
    openingtime,
    profilePicture
  } = await req.body;

  const userExists = await sellerSchema.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const seller = new sellerSchema({
    name,
    email,
    password,
    storename,
    storeaddress,
    busnesstype,
    gstin,
    pincode,
    contactNumber,
    city,
    state,
    closingtime,
    openingtime,
    profilePicture,
    
  });
  seller
    .save()
    .then(res.status(201).json({ message: "User registered successfully" }))
    .catch((err) => console.log(err.message));
});

sellerSignupRouter.route("/").get(async(req,res)=>{
    const seller = await sellerSchema.find({})
    res.send(seller)
})

sellerSignupRouter.route("/:id").get(async(req,res)=>{
    const seller = await sellerSchema.findById(req.params.id)
    res.send(seller)
})

sellerSignupRouter.route("/:id").delete(async(req,res)=>{
    const seller = await sellerSchema.findByIdAndDelete(req.params.id)
    res.send(seller)
}   )

module.exports = sellerSignupRouter;
