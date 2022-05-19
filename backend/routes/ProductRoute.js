const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/ProductController');

const router = express.Router();

//import getAllProducts 
router.route('/products').get(getAllProducts)

router.route('/product/new').post(createProduct)

router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails)



module.exports = router