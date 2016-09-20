
var express = require('express');
var porta = 3000
var ip = 'localhost';
var app = express();

app.set("view engine", "ejs");

app.listen(porta,function(){
  //response.send("<html><body>Listando Produtos express</body></html>")
  console.log("Servidor rodando em " + ip + " na porta " + porta);
});

app.get("/produtos",function(req,res){
  res.render("produtos/lista");
})



