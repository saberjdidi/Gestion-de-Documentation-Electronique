const mongoose = require('mongoose');

const document = new mongoose.Schema ({
    titre : String,
    contenu: String,
    date: {
        type: Date,
        default: Date.now()
    },
    categorie: String
});

module.exports = document;