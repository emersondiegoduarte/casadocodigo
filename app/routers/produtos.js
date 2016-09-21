
var connectionFactory = require('../infra/connectionFactory');
module.exports = function(app){
	app.get("/produtos",function(req,res){
		  //res.render("produtos/lista");
		  			
		var client = connectionFactory();
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

		  //   var pool = new postgresql.Pool(config);


		 //   pool.connect(function(err, client, done) {
			//   if(err) {
			//     return console.error('error fetching client from pool', err);
			//   }
			//   client.query('SELECT * FROM livros', function(err, result) {
			//     //call `done()` to release the client back to the pool
			//     done();

			//     if(err) {
			//       return console.error('error running query', err);
			//     }
			//     console.log(result.rows[0].id);
			//     res.send(result.rows);
			//     //output: 1
			//   });
			// });

			// pool.on('error', function (err, client) {
			//   // if an error is encountered by a client while it sits idle in the pool
			//   // the pool itself will emit an error event with both the error and
			//   // the client which emitted the original error
			//   // this is a rare occurrence but can happen if there is a network partition
			//   // between your application and the database, the database restarts, etc.
			//   // and so you might want to handle it and at least log it out
			//   console.error('idle client error', err.message, err.stack)
			// })
	});
}; 