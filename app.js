//imports
const express = require("express");


const app = express(); //creates express app
app.use(express.json()); //allows the app to understand JSON

app.set("view engine", "ejs"); //using EJS

app.use(express.static('public')); //allows app to use static pages (css, views)
app.use('/css', express.static(__dirname + 'public/css')); //uses the css files


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

app.listen(3000, (req, res, err) => { //builds connection to host through port 3000
    if (err) console.log(err);
    console.log("LISTENING ON PORT 3000");
})