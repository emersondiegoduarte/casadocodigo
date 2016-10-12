/**
 * Created by diegodias on 12/10/16.
 */
module.exports = function (app) {

    app.get('/promocoes/form', function (req,res) {
        var client = app.infra.connectionFactory();
        client.connect();
        var produtosDAO = new app.infra.ProdutosDAO(client);
        produtosDAO.lista(function (err, result){
            res.format({
                html: function(){
                    res.render("promocoes/form",{lista:result});
                },
                json : function(){
                    res.json(result);
                }
            });
            client.end();
        });
    });

    app.post("/promocoes", function(req,res) {
        var promocao = req.body;
        console.log('passou aqui');
        app.get('io').emit('novapromocao' , promocao);
        res.redirect("/promocoes/form");
    });

}