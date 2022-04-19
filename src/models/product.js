const mongoose = require("mongoose");
//const validator = require("validator");
//const { default: isEmail } = require("validator/lib/isemail");


const productSchema = mongoose.Schema({

    category_id:{
       type:Number,
       require:true
    },
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    bid_start_datetime:{
        type:String,
        require:true
    },
    bid_end_datetime:{
        type:String,
        require:true
    },
    regular_price:{
        type:Number,
        require:true
    },
    bid_start_price:{
        type:Number,
        require:true
    },
    harvest_date:{
       type:String,
       require:true
    },
    nature:{
        type:String,
        require:true
    },
    Qty:{
        type:Number,
        require:true
    }
});

//collection

const Product = mongoose.model("Product",productSchema);
module.exports = Product;