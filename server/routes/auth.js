const router = require('express').Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/gestionDocumentation', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const userSchema = require('../models/user');
const userModel = mongoose.model('users', userSchema);

router.post('/register', async(req, res) => {
    req.body.password = await bcrypt.hashSync(req.body.password);
    const result = await userModel.create(req.body).then().catch(err => {
        res.send(err);
        return
    });
    res.send(result);
});

router.post('/login', async(req, res) => {
    const resultLogin = await userModel.findOne({email: req.body.email});
    if(!resultLogin){
        res.send({message: 'is not email'})
    }
    if(!bcrypt.compareSync(req.body.password, resultLogin.password)){
        res.send({message : 'is not password'})
    }
    const token = jwt.sign({data:resultLogin}, 'secret_code');
    res.send({message: 'ok', usertoken:token})
});

router.get('/users', async(req, res) => {
    const result= await userModel.find();
    res.send(result);
});

router.delete('/users/:id', async(req, res) => {
    const result = await userModel.remove({_id: req.params.id});
    res.send(result)
});

router.put('/users/:id', async(req, res) => {
    const result = await userModel.update({_id: req.params.id}, {$set: req.body});
    res.send(result)
});

module.exports = router;