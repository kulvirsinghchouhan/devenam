const express = require("express");
const Categorie = require("./models/categories");
const Product = require("./models/product");
require("./db/conn");
const app = express();
const User = require("./models/regist");

const port = process.env.PORT || 2100 ;

app.use(express.json());


app.get("/", (req,res) => {
    res.send("hello i m here");
});


app.post("/user", (req,res) => {

  //console.log(req.body);
  const user = new User(req.body);
  user.save().then(() =>{
      res.status(201).send(user);
      }).catch((e) => {
      res.status(400).send(e);
  });
 //res.send("hello i m here");
})

app.post("/addcategories",(req,res) => {
 const categorie = new Categorie(req.body);
    //console.log(req.body);
    categorie.save().then(() => {
        res.status(201).send(categorie);
    }).catch((e) => {
        res.status(400).send(e);
    });
    //res.send(" hello i m here");
 })

 app.post("/addproduct", (req,res) => {

   console.log(req.body);
   const product = new Product(req.body);

   product.save().then(() => {
      res.status(201).send(product);
   }).catch((e) => {
       res.status(400).send(e);
   });

   // res.send("hello i m here");
    
  });



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})