const mongoose = require("mongoose");
const Chinchilla = mongoose.model("Chinchilla");

class Chinchillas {

    index(req, res){
        Chinchilla.find({}, (err, chinchillas) => {
            if(err) {
                console.log(err);
            }
            res.render("index", {chinchillas});
        });
    }

    create(req, res){
        let c = new Chinchilla(req.body);
        c.save(err => {
            if(err) {
                console.log(err);
            }   
            res.redirect("/");
        });
    }

    edit(req, res){
        Chinchilla.findOne({_id: req.params._id}, (err, chinchilla) => {
            if(err) {
                console.log(err);
            }
            res.render("edit", {chinchilla});
        });
    }

    update(req, res){
        Chinchilla.findOneAndUpdate({_id: req.params._id}, req.body, { runValidators: true }, err => {
            if(err) {
                console.log(err);
            }
            res.redirect("/");
        });
    }

}

module.exports = new Chinchillas();