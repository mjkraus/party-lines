var express = require('express');
// var fs = require('fs');
// calls the app function in express
var app = express();
// var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

// var sparkline = require("./public/js/sparkline").sparkline;

// var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

// Create the chart
// Highcharts.chart('container', { /*Highcharts options*/ });
// var d3 = require('d3');
// var morgan = require('morgan');
// var router = express.Router();

// SETS UP OUR PORTS
var port = process.env.PORT || 3000;

// use our middleware to get the static files for our route
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
// app.use('/', function(req,res,next){
// 	console.log('pizza')
// 	next();
// });
// the route get it for this request
app.get('/', function(req,res){
	res.render('index');
});

// // SETS UP EXPRESS
// app.use(morgan('dev'));

// TEMPLATE SETUP
// app.use(express.static(__dirname + '/public'));

// ROUTES
// app.use('/', router);
// var quiz = require('./quiz.js');
// quiz();
// listening for our port
app.listen(port);

// app.get('/', function(req, res){
//   res.render('./views/index.ejs');
// // });
// sparkline();
console.log('The server started on ' + port);