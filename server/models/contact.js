const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    nom: String,
    prenom: String,
    telephone: String,
    message: String,
    email: String
});
module.exports = contact;