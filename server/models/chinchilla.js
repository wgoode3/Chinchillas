const mongoose = require("mongoose");

const ChinchillaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {timestamps: true});

mongoose.model("Chinchilla", ChinchillaSchema);