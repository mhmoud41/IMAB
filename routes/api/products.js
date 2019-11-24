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


if(name) productFields.name = name
if(price) productFields.price = price
if(description) productFields.description = description
if(photo) productFields.photo = photo

try {
    

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
router.get('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      if (!product) {
        res.status(404).json({ msg: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        res.status(404).json({ msg: 'Product not found' });
      }
      res.status(500).send('Server Error');
    }
  });
  
  


module.exports = router;  