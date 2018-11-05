const mongoose = require('mongoose');

const commande = new mongoose.Schema({
    nombre_doc : Number,
    date : {
        type : Date,
        default: Date.now()
    },
    titre_doc : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'documents'
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
});
module.exports = commande;