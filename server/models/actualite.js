const mongoose = require('mongoose');

const actualite = new mongoose.Schema({
    titre: String,
    description: String
});

module.exports = actualite;