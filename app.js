var porta = 3000;
var ip = 'localhost';
var app = require("./config/express")();


app.listen(porta,function(){
    console.log("Servidor rodando em " + ip + " na porta " + porta);
});





