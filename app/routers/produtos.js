module.exports = function(app){
    app.get("/produtos",function(req,res){
        var client = app.infra.connectionFactory();
        client.connect();
        var produtosDAO = new app.infra.ProdutosDAO(client);
        produtosDAO.lista(function (err, result){
        	client.end();
            res.render("produtos/lista",{lista:result});
         });
        
    });
};