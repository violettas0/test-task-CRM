const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fs = require('fs');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());

let clients = fs.readFileSync('server/clients.json', "utf8");

app.get('/api/clients', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(clients);
});

app.get('/api/objects', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(fs.readFileSync('server/service-objects.json'));
});


app.get('/', function(req, res){
    res.render('form');
    res.sendFile("index.html");
});

app.post('/api/clients', (req, res) => {
    clients = req.body;
    res.send(clients);
});


app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

