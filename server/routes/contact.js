const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gestionDocumentation', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const contactSchema = require('../models/contact');
const contactModel = mongoose.model('contact', contactSchema);

router.post('/contact', async(req, res) => {
    const result = await contactModel.create(req.body)
    res.send(result)
});
router.get('/contact', async(req, res) => {
    const result = await contactModel.find()
    res.send(result)
});
router.delete('/contact/:id', async(req, res) => {
    const result = await contactModel.remove({_id: req.params.id})
    res.send(result)
});
router.put('/contact/:id', async(req, res) => {
    const result = await contactModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});

module.exports = router;