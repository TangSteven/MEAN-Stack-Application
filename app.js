//imports

require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');//used to connect to mongodb

let mongodburl = "mongodb+srv://SYSTEM:" + process.env.MONGODB_PASS+"@cluster0.jn4pv.mongodb.net/Cluster0?retryWrites=true&w=majority/firstCollection";
const app = express(); //creates express app
app.use(express.json()); //allows the app to understand JSON

app.use(express.static(__dirname+'/public')); //allows app to use static pages below
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname+ 'public/img'));

app.set("view engine", "ejs"); //using EJS

app.get("/", (req, res) => { //middleware for home page
    res.render('index'); //index.ejs
});

app.get('/about', (req, res) => { //middleware for about page
    res.render("about"); //about.ejs
});

app.post("/postHello/:id/:name", (req, res) => { //middleware to test params and query
    console.log(req.body);
    console.log(req.params, "params");
    console.log(req.query, "query");
    res.status(200).send("postHello response");
})

mongoose.connect(mongodburl);

app.listen(3000, (req, res, err) => { //builds connection to host through port 3000
    if (err) console.log(err);
    console.log("LISTENING ON PORT 3000");
})