const mongoose = require('mongoose');

const categorie = new mongoose.Schema ({
    titre: String,
    description: String
});

module.exports = categorie;