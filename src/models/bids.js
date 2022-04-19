const mongoose = require("mongoose");
const validator = require("validator");
//const { default: isEmail } = require("validator/lib/isemail");


const bidsSchema = mongoose.Schema({
    pname:{
        type:String,
        require:true
    }
            
 

})

//collection

const bids = mongoose.model("bids",userSchema);
module.exports = bids;