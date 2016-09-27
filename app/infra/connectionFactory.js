var postgres = require('pg');


module.exports = function(){
	return createDbConnection;
}


//Wrapper pra devolver uma função ao invés do objeto da conexão.
function createDbConnection(){
	var config = {
			  user: 'postgres', //env var: PGUSER
			  database: 'casadocodigo_nodejs', //env var: PGDATABASE
			  password: 'root', //env var: PGPASSWORD
			  host: 'localhost', // Server hosting the postgres database
			  port: 5432, //env var: PGPORT
			  max: 20, // max number of clients in the pool
			  idleTimeoutMillis: 60000, // how long a client is allowed to remain idle before being closed
			};
	return new postgres.Client(config);
}



//Pool de conexões
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