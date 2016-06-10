'use strict'

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

var port = process.env.PORT || 8000;

/**
 *  Have our server listen on port 8000
 */
app.listen(port, function(){
  console.log('Server running on port %d', port);
});


app.use(express.json());


app.post('/', badges.save, badges.send);

app.get('/badges', badges.get);

/*
app.post('/', badges.save, badges.send, function(req,res){
	res.send('\sunt in app.js care intermediaza restul aplicatiei\n\n');
});
*/


//app.listen(8000, console.log);


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


