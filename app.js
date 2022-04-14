const express = require("express");
const { json } = require("express/lib/response");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('pages/index');
});

app.get('/about', (req, res) => {
    res.render("pages/about");
});

app.post("/postHello/:id/:name", (req, res) => {
    console.log(req.body);
    console.log(req.params, "params");
    console.log(req.query, "query");
    res.status(200).send("postHello response");
})

app.listen(3000, (req, res, err) => {
    if (err) console.log(err);
    console.log("LISTENING ON PORT 3000");
})