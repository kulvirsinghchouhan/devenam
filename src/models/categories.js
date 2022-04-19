const mongoose = require("mongoose");


const categorieSchema = mongoose.Schema({

    name:{
        type:String,
        require:true
         }

});

//make new collection
const Categories = mongoose.model("Categorie",categorieSchema);
module.exports = Categories ;