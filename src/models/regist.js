const mongoose = require("mongoose");
const validator = require("validator");
//const { default: isEmail } = require("validator/lib/isemail");


const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
            
    email:{
        type:String,
        require:true,
        unique:[true, "Email id already exit"],
        validate(value){
           if(!validator.isEmail(value)){
               throw new Error("Invalid Email id")
           }
       } 

    },
    phone:{
        type:Number,
        require:true,
        min:10
    },

    password:{
        type:String,
        require:true
        }

})

//collection

const User = mongoose.model("User",userSchema);
module.exports = User;