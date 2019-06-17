const Chinchillas = require('../controllers/chinchillas');

module.exports = function(app) {
    app.get("/", Chinchillas.index);
    app.post("/create", Chinchillas.create);
    app.get("/edit/:_id", Chinchillas.edit);
    app.post("/update/:_id", Chinchillas.update);
}