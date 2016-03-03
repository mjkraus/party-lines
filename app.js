var express = require('express');
// var fs = require('fs');
// calls the app function in express
var app = express();
// var Highcharts = require('highcharts');

// SETS UP OUR PORTS
var port = process.env.PORT || 3000;

// use our middleware to get the static files for our route
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index');
});

app.listen(port);

console.log('The server started on ' + port);