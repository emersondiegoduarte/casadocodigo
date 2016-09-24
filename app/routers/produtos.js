module.exports = function(app){
	app.get("/produtos",function(req,res){
		  //res.render("produtos/lista");
		  			
		var client = app.infra.connectionFactory();
		client.connect(function (err) {
		  if (err) throw err;

		  // execute a query on our database
		  client.query('SELECT * FROM livros', function (err, result) {
		    if (err) 
		    	throw err;

		    // just print the result to the console
		    //res.send(result.rows) // devolve  o json
		    res.render("produtos/lista",{lista:result.rows});

		    // disconnect the client
		    client.end(function (err) {
		      if (err) throw err;
		    });
		  });
		});
	});
}; 