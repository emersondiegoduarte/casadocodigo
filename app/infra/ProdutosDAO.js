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

ProdutosDAO.prototype.salvar = function(produtos,callback){
	console.log(produtos);
    this._connection.query('INSERT INTO livros(titulo, descricao, preco) values($1, $2, $3)', [produtos.titulo,produtos.descricao, produtos.preco],  function(err, result) {
		    if (err) {
		      return console.error('error running query', err);
		    }

		    callback(err);
	});
}

module.exports =  function(){
	return ProdutosDAO;
}