const mongoose=require('mongoose')

const productSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        stock:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true,
        },
        status:{
            type:Boolean,
            default:true,
        }
    }
)

const productModel= new mongoose.model('productDetails',productSchema)

module.exports= productModel; 