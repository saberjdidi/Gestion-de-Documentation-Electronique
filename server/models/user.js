const mongoose = require('mongoose');

const user = new mongoose.Schema ({
    nom : String,
    prenom : String,
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : String,
    role : {
        type : String,
        enum : ['admin', 'responsable', 'user'],
        default : 'user'
    }
});

module.exports = user;