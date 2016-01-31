'use strict'

var express = require('express');
var badges = require('./controllers/badges');

var app = express();

app.use(express.json());

app.post('/', badges.save, badges.send, function(req,res){
	res.send('\sunt in app.js care interediaza restul aplicatiei\n\n');
});


app.listen(8000, console.log);


/*
app.post('/', function(req, res){
	res.send('hello world din consola');	
});
*/
/*
app.post('/', badges.save, badges.send, function(req, res){
	//res.render('dashboard'); terminarea proces cu route spre pagina principala
});
*/


