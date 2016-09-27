function ProdutosDAO(connection){
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('SELECT * FROM livros',  function(err, result) {
		    if (err) {
		      return console.error('error running query', err);
		    }

		    callback(err, result.rows);
	});
}

module.exports =  function(){
	return ProdutosDAO;
}