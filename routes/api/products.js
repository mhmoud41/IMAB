const express = require('express');
const router = express.Router();
const Product = require('../../models/Product')
const { check, validationResult } = require('express-validator')

router.post('/', [
    check('name','Name is required').not().isEmpty(),
    check('price','Price is required').not().isEmpty(),
    check('photo','Photo is required').not().isEmpty()
] ,async (req, res) => {
const errors = validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
}
const{
    name,
    price,
    photo,
    description
} = req.body;
const productFields = {};
productFields.user = req.name;
if(name) productFields.name = name
if(price) productFields.price = price
if(description) productFields.description = description
if(photo) productFields.photo = photo

try {
    let product = await Product.findOne({ user: req.name });

    if(product){
        product = await Product.findOneAndUpdate(
            {user: req.name},
            {$set: productFields},
            {new: true}
        )

        return res.json(product)

    }

    product = new Product(productFields)
    await product.save();
    res.json(product)
} 
catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
}
})
router.get('/', async (req, res) => {
    try {
      const products = await Product.find().populate('product', ['name', 'photo']);
      res.json(products);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


module.exports = router;