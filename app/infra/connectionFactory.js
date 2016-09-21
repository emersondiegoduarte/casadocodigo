var postgres = require('pg');
var config = {
			  user: 'postgres', //env var: PGUSER
			  database: 'casadocodigo_nodejs', //env var: PGDATABASE
			  password: 'root', //env var: PGPASSWORD
			  host: 'localhost', // Server hosting the postgres database
			  port: 5432, //env var: PGPORT
			  max: 20, // max number of clients in the pool
			  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
			};

module.exports = function(){
	return new postgres.Client(config);
}