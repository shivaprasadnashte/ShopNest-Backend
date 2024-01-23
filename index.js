const express = require("express");
const connectDB = require("./config/db");
const signuprouter = require("./signup");
const loginrouter = require("./login");
const sellerLoginroute =require ('./api/sellerlogin')
const sellerSignupRouter = require("./api/sellersignup");
const productRouter =require ("./api/product");
// const reviewRouter = require("./api/review");
const app = express();
connectDB(); 
app.use(express.json());
app.use("/signup",signuprouter);  
app.use("/login",loginrouter);
app.use("/sellersignup",sellerSignupRouter);
app.use("/sellerloginrouter",sellerLoginroute);
app.use("/product",productRouter);
// app.use("/review",reviewRouter);
app.listen(3000, () => console.log("Server running on port 3000"));
   