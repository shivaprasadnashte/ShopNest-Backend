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
    const newReview = new reviewSchema({
        userid,
        review,
        rating,
        productid
    });
  
    newReview.save()
        .then(() => res.json('Review added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

reviewRouter.route('/').get(async (req, res) => {
    reviewSchema.find({})
        .then(review => res.json(review))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

reviewRouter.route('/:id').get(async (req, res) => {
    reviewSchema.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

reviewRouter.route('/:id').delete(async (req, res) => {
    reviewSchema.findByIdAndDelete(req.params.id)
        .then(() => res.json('Review deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

module.exports = reviewRouter;