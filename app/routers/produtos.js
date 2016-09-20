
module.exports = function(app){
	app.get("/produtos",function(req,res){
		  //res.render("produtos/lista");
		  var postgresql  = require("pg");
		  var conString = "postgres://postgres:root@localhost:5432/casadocodigo";
		  var client = new postgresql.Client(conString);
		  client.connect();
		  client.query("SELECT * FROM livros", function(error,results){
		   		res.send(results);
		   });
		  client.end();
	});
}; 