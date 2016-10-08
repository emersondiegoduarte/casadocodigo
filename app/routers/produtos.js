module.exports = function(app){
    app.get("/produtos",function(req,res){
        var client = app.infra.connectionFactory();
        client.connect();
        var produtosDAO = new app.infra.ProdutosDAO(client);
        produtosDAO.lista(function (err, result){
        	res.format({
        		html: function(){
					res.render("produtos/lista",{lista:result});
        		},
        		json : function(){
        			res.json(result);
        		}
        	});
        	client.end();
        }); 
    });

    app.get("/produtos/form",function(req,res){
        res.render("produtos/form",{errosValidacao:{} , produto:{}});
    });

    app.post("/produtos",function(req,res){
        var client = app.infra.connectionFactory();
        client.connect();
        var produtosDAO = new app.infra.ProdutosDAO(client);
        var produto = req.body;
        req.assert('titulo','Titulo obrigatório').notEmpty();
        req.assert('preco', 'Formato de preço inválido').isFloat();
        var errors = req.validationErrors();
        if(errors){
            res.format({
               html: function(){
                    res.status(400).render("produtos/form",{validationErrors:errors,produto:produto});
                },
                json: function(){
                    res.status(400).send(errors);
                }
            });       	
        }
        produtosDAO.salvar(produto,function (err){
        	if(err)
        		console.log(err);
        	client.end();
            res.redirect("produtos");
         });
        
    });
};