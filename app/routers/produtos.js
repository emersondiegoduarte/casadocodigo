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

    app.get("/produtos/form",function(req,res){
        res.render("produtos/form");
    });

    app.post("/produtos",function(req,res){
        var client = app.infra.connectionFactory();
        client.connect();
        var produtosDAO = new app.infra.ProdutosDAO(client);
        var produto = req.body;
        console.log(produto);
        produtosDAO.salvar(produto,function (err){
        	if(err)
        		res.render("<h1>Erro ao execurar a query</h1>");
        	client.end();
            res.redirect("produtos");
         });
        
    });
};