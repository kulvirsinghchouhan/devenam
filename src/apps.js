const console = require("console");
const express = require("express");
const path = require("path");
const axios = require('axios');
require("./db/conn");
const user = require("./models/users")
const hbs = require("hbs");
const async = require("hbs/lib/async");
const User = require("./models/users");
const { registerAsyncHelper } = require("hbs");
const { Console } = require("console");

const app = express();

const port = process.env.PORT || 3100

// setting the path

const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
//console.log(path.join(__dirname,"../public"));
console.log(path.join(__dirname, "../templates/views"));
//console.log(path.join(__dirname, '../node_modules/bootstrap/dist'));
// middlewae
// app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
// app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
// app.use('/jq', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/img', express.static(path.join(__dirname,'../public/images')));
app.use('/css', express.static(path.join(__dirname,'../public/css')));

//app.use(express.static(staticpath));
//app.use(express.urlencoded({extended:false}));
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views",  templatepath);
hbs.registerPartials(partialpath);


//routing
app.get("/", (req,res)=>{
    res.render("index")
});

app.get("/contact", (req,res)=>{
    res.render("contact")
});

app.get("/login", (req,res)=>{
    res.render("login")
});

app.get("/signup", (req,res)=>{
    res.render("signup")
});

app.post("/registion", async(req, res) => {
    //res.send(req.body);
    const UserData = new User(req.body);
     await UserData.save();
     res.status(201).render("signup")
    try{

    } catch (error) {
      res.status(500).send(error);
    }
});

//login check

app.post("/dashboard", async(req,res)=>{
    //res.send(req.body);
    try {
        const email = req.body.email;
        const password = req.body.password;
       //console.log(`${email} and password is ${password}`)
        
      const userdata = await User.findOne({email:req.body.email});
        // res.send(useremail);
        //const name = req.body.name;
 
         //console.log(useremail);
         if (userdata.password === password){

          // const  name = useremail.name ;
          console.log(userdata);
            res.status(201).render("dashboard", {
            post: {
                name: userdata.name,
             
            } });

         } else{
             res.send("password not matching")
         }
        
    } catch (error) {
        res.status(400).send("invalid email")
        
    }
});
//api
console.log('hello');


// axios
//   .post('https://reqres.in/api/users', {
//     todo: 'Buy the milk'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })

// axios({
//     method: 'POST',
//     url: 'https://train.enam.gov.in/pop/rest/get_lot_info',
//     headers: { 
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer YjXzGtMJSegkSNeHFPrDo5Z4nag`
        
//     },
//     data: 'limit=3'
// }).then((response)=> {
//     console.log(response.data)
//     expect(response.status).toBe(200) // 1) assert again status code 
//     expect(response.headers['content-type']).toBe('application/json') // 2) assert against header
//     expect(response.data['has_more']).toBe(true) // 3) assert against body
// })

//var axios = require('axios');
var data = '{\r\n "requestDate":"2022-01-04" \r\n}\r\n';

var config = {
  method: 'post',
  url: 'https://train.enam.gov.in/pop/rest/get_lot_info',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer YjXzGtMJSegkSNeHFPrDo5Z4nag', 
    'Cookie': 'JSESSIONID=745928E2FD8554DCA6303D202CD1FDA6; SERVERID=node34'
      },
  data : data
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


//server create
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})