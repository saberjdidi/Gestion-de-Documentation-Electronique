const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gestionDocumentation', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const categorieSchema = require('../models/categorie');
const categorieModel = mongoose.model('categorie', categorieSchema);

const documentSchema = require('../models/document');
const documentModel = mongoose.model('documents', documentSchema);

const actualiteSchema = require('../models/actualite');
const actualiteModel = mongoose.model('actualite', actualiteSchema);

const commandeSchema = require('../models/commande');
const commandeModel = mongoose.model('commande', commandeSchema);

//CRUD categorie
router.post('/categorie', async(req, res) => {
    const result = await categorieModel.create(req.body);
    res.send(result)
});
router.get('/categorie', async(req, res) => {
    const result = await categorieModel.find();
    res.send(result)
});
router.delete('/categorie/:id', async(req, res) => {
    const result = await categorieModel.remove({_id: req.params.id})
    res.send(result)
});
router.put('/categorie/:id', async(req, res) => {
    const result = await categorieModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});

//CRUD document
router.post('/documents', async(req, res) => {
    const result = await documentModel.create(req.body);
    res.send(result)
});
router.get('/documents', async(req, res) => {
    const result = await documentModel.find()
    res.send(result)
});
router.get('/documents/:id', async(req, res) => {
    const result = await documentModel.findOne({_id: req.params.id});
    res.send(result)
})
router.delete('/documents/:id', async(req, res) => {
    const result = await documentModel.remove({_id: req.params.id})
    res.send(result)
});
router.put('/documents/:id', async(req, res) => {
    const result = await documentModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});
//CRUD actualite
router.post('/actualite', async(req, res) => {
    const result = await actualiteModel.create(req.body)
    res.send(result) 
});
router.get('/actualite', async(req, res) => {
    const result = await actualiteModel.find();
    res.send(result)
});
router.delete('/actualite/:id', async(req, res) => {
    const result = await actualiteModel.remove({_id: req.params.id});
    res.send(result)
});
router.put('/actualite/:id', async(req, res) => {
    const result = await actualiteModel.update({_id: req.params.id}, {$set: req.body});
    res.send(result);
});

module.exports = router;