const express = require("express");
const connectDB = require("./config/db");
const signuprouter = require("./api/signup");
const loginrouter = require("./api/login");
const sellerLoginroute =require ('./api/sellerlogin')
const sellerSignupRouter = require("./api/sellersignup");
const productRouter =require ("./api/product");
const reviewRouter = require("./api/review");
const cors = require("cors");
const app = express();
app.use(cors());
connectDB(); 
app.use(express.json());
app.use("/signup",signuprouter);  
app.use("/login",loginrouter);
app.use("/sellersignup",sellerSignupRouter);
app.use("/sellerloginrouter",sellerLoginroute);
app.use("/product",productRouter);
app.use("/review",reviewRouter);
app.listen(3000, () => console.log("Server running on port 3000"));
   