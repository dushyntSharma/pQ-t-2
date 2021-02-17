var express = require('express');

var url = require('url');

var path = require('path');

var http = require('http');

var app = express();

const eloquaCallsFunction = require('./services/eloquaCallsFunction');

var port = process.env.port || 8080;

app.use(express.static(__dirname + '/'));

app.use(express.json());

app.get('/', (req, res) => res.sendFile('/index.html'));



var server = http.createServer(app);



server.listen(port, () => console.log('Asset Naming Assistant Running on : ', port));


app.get('/getCall', function(req, res){
    eloquaCallsFunction.getCall(req.body)
    .then(function(result){
        res.send(result)
    })
});

