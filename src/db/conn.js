const mongoose = require("mongoose");

//createing a database
mongoose.connect("mongodb://localhost:27017/mandi",{
    }).then(() => {
    console.log("connection successful");
}).catch((error) =>{
    console.log(error);
})