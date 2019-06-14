const express = require("express"),
     mongoose = require("mongoose"),
           bp = require("body-parser"),
          app = express(),
         port = 8000;

app.use(express.static(__dirname + "/static"));
app.use(bp.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

mongoose.connect('mongodb://localhost/chinchillas');

const ChinchillaSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number
}, {timestamps: true});
mongoose.model("Chinchilla", ChinchillaSchema);
const Chinchilla = mongoose.model("Chinchilla");

app.get("/", (req, res) => {
    Chinchilla.find({}, (err, chinchillas) => {
        if(err) {
            console.log(err);
        }
        res.render("index", {chinchillas});
    });
});

app.post("/create", (req, res) => {
    let c = new Chinchilla(req.body);
    c.save(err => {
        if(err) {
            console.log(err);
        }
        res.redirect("/");
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});