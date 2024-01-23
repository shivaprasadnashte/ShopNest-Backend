const express = require('express')
const productRouter = express.Router()
const productSchema = require('../module/product')

productRouter.route('/').post(async (req, res) => {
    const {
        name,
        description,
        price,
        category,
        stock,
        sold,
        photo1,
        photo2,
        photo3,
        photo4,
        photo5, 
        sellerdata,
        photo6,
        isselled,
        featuress
    }= req.body
    const product = new productSchema({
        name,
        description,
        price,
        category, 
        stock,
        sold,
        photo1,
        sellerdata,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        isselled,
        featuress
    })
     product.save()
    .then(res.status(201).json({ message: "product added successfully" }))
    .catch((err) => console.log(err.message));
})

productRouter.route('/').get(async (req, res) => {
    const product = await productSchema.find({})
    res.send(product)
}
)

productRouter.route('/:id').get(async (req, res) => {
    const product = await productSchema.findById(req.params.id)
    res.send(product)
}
)

productRouter.route('/:id').delete(async (req, res) => {
    const product = await productSchema.findByIdAndDelete(req.params.id)
    res.send(product)
}
)
 

module.exports = productRouter
