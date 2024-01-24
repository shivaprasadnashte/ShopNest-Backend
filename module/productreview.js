const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true,
        trim: true
    },
    review: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        default: 0
    },
    productid: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('review', reviewSchema);