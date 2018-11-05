const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gestionDocumentation', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const commandeSchema = require('../models/commande');
const commandeModel = mongoose.model('commande', commandeSchema);

const documentSchema = require('../models/document');
const documentModel = mongoose.model('documents', documentSchema);


router.post('/commande', async(req, res)=> {
    const result = await commandeModel.create(req.body);
    res.send(result)
});
router.get('/commande', async(req, res)=> {
    const result = await commandeModel.find().populate({path : 'titre_doc'}).populate({path : 'user'});
    res.send(result)
});
router.get('/commande/:id', async(req, res)=> {
    const result = await commandeModel.findOne({_id: req.params.id}).populate({path : 'titre_doc'}).populate({path : 'user'});
    res.send(result)
});
router.delete('/commande/:id', async(req, res) => {
    const result = await commandeModel.remove({_id: req.params.id});
    res.send(result)
});
router.put('/commande/:id', async(req, res) => {
    const result = await commandeModel.update({_id: req.params.id}, {$set: req.body});
    res.send(result)
});

module.exports = router;