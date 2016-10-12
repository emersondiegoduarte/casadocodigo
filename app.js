var porta = 3000;
var ip = 'localhost';
var app = require("./config/express")();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http.listen(porta,function(){
    console.log("Servidor rodando em " + ip + " na porta " + porta);
});





