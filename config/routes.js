module.exports = function(app){

	app.get('/', function(req, res){
		res.render('quiz.ejs');
	});
};