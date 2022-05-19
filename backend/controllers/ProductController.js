const Product = require("../models/productModel");
const Errorhandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

//create Product --Admin
exports.createProduct = catchAsyncError(async(req, res,next) =>{
    const product = await Product.create(req.body);
    
    res.status(201).json({
        success: true,
        product
    })
    console.log(product)
})

//Get all product
exports.getAllProducts = catchAsyncError(async (req,res) =>{
    const apiFeature = new ApiFeatures(Product.find(),req.query).search()
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products
    })
    console.log("Total",products)
})

//Get product Details
exports.getProductDetails = catchAsyncError(async (req,res,next) =>{
    let product = await Product.findById(req.params.id)

    if(!product){
        return next(new Errorhandler("Product not found", 404))
    }

    res.status(200).json({
        success:true,
        product
    })
})

// Update product --Admin Only
exports.updateProduct = catchAsyncError(async (req,res, next) => {
    let product =await Product.findById(req.params.id)

    if(!product){
        return next(new Errorhandler("Product not found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true, 
        useFindAndModify:false})

    res.status(200).json({
        success:true,
        product
    })
})

//Delete Product
exports.deleteProduct = catchAsyncError(async(req, res) => {
    let product = await Product.findById(req.params.id)

    if(!product){
        return next(new Errorhandler("Product not found", 404))
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
})