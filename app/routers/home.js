module.exports = function(app){
	app.get('/', function(req,res){
		var client = app.infra.connectionFactory();
        client.connect();
        var produtosDAO = new app.infra.ProdutosDAO(client);
        produtosDAO.lista(function (err, result){
        	res.format({
        		html: function(){
					res.render("./home/index",{livros : result});
        		},
        		json : function(){
        			res.json(result);
        		}
        	});
        	client.end();
        }); 

		
	})
}