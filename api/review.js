const express = require('express');
const reviewRouter = express.Router();
const reviewSchema = require('../module/productreview');

reviewRouter.route('/').post(async (req, res) => {
    const {
        userid,
        review,
        rating,
        productid
    } = await req.body;
});