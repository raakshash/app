"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var methodOverride = require('method-override');
var Grid = require('gridfs-stream');

var app = new express();

var contactRoute = require('./contactlist/routes/route.js');

mongoose.connect('mongodb://localhost:27017/myapp');

mongoose.connection.on('connected', function(){
    console.log("connected to data base mongod @ 27017");
});
mongoose.connection.on('error', function(err){
    if(err){
        console.log("error in mongod connection: "+err);
    }
});
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', contactRoute);

app.get('/', function(req, res){
    res.send('foobar');
});

app.listen(port, function(){
    console.log("server started at: "+port);
});