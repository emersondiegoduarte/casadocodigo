var porta = 3000;
var ip = 'localhost';
var app = require("./config/express")();
var rotasProduto = require("./app/routers/produtos")(app);

app.listen(porta,function(){
  //response.send("<html><body>Listando Produtos express</body></html>")
  console.log("Servidor rodando em " + ip + " na porta " + porta);
});





