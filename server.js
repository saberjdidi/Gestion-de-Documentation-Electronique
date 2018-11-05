const express = require('express');
const bodyparser = require('body-parser');
const port = 3000;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); 
    next();
  });

app.use(bodyparser.json());

const auth = require('./server/routes/auth');
app.use('/user', auth);

const document = require('./server/routes/documents');
app.use('/document', document);

const commande = require('./server/routes/commande');
app.use('', commande);

const contact = require('./server/routes/contact');
app.use('', contact);

app.listen(port, err => {
    console.log(`connect with port ${port}`)
});