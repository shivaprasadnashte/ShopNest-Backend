const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // trim is used to remove white spaces
      min: 3,
    },
    email: {
      type: String,
      required: true,
      trim: true, // trim is used to remove white spaces
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    busnesstype: {
      type: String,
      required: true,
    },
    storename: {
      type: String,
      required: true,
    },
    storeaddress: {
      type: String,
      required: true,
    },
    gstin: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number, // 0 for user and 1 for admin
      default: 0,
    },
    contactNumber: {
      type: Number,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    closingtime: {
      type: String,
    },
    openingtime: {
      type: String,
    },

    profilePicture: {
      type: String, 
    },
    isseller: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);
