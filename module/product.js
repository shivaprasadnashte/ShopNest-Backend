const mongoose = require("mongoose")

const productSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    category: {
        type: Object,
        required: true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },   
    photo1: {
        data: String,
        contentType: String
    },
    photo2: {
        data: String,
        contentType: String
    },
    photo3: {
        data: String,
        contentType: String
    },
    photo4: {
        data: String,
        contentType: String
    },
    photo5: {
        data: String,
        contentType: String
    },
    photo6: {
        data: String,
        contentType: String
    },
    isselled: {
        type: Boolean,
        default: false
    },
    features: {
        type: Array,
        default: []
    },
    isinoffer: {
        type: Boolean,
        default: false
    },
    offer: {
        type: Number,
        default: 0
    },
    sellerdata:{
        type: Object,
        ref: "User",
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)
