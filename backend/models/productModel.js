const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please enter product name"],
        trim: true
    },
    description:{
        type:String,
        required: [true, "Please enter product description"]
    },
    price:{
        type:Number,
        required: [true, "Please enter product price"],
        maxLength: [6, "Price cannot exceed 6 characters"]
    },
    rating:{
        type:Number,
        default: 0
    },
    images:[    //images in array as we need to need more images
        {

            public_id:{
                type:String,
                required: true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required: [true, "Please enter product category"]
    },
    stock:{
        type:String,
        required: [true, "Please enter product stock"],
        maxLength: [4, "Product lenght cannot exceed 4 characters"],
        default: 1
    },
    numOfReview:{
        type:String,
        default: 0
    },
    reviews:[
        {
            name:{
                type:String,
                required: true
            },
            rating:{
                type:Number,
                required: true
            },
            comments:{
                type:String,
                required: true
            }
        }
    ],
    createdAt:{
        type:Date,
        default: Date.now   
    }
})

module.exports = mongoose.model('product',productSchema)