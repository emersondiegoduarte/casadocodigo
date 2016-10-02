var http = require('http');

var configuracoes = {
	hostname : 'localhost',
	port: 3000,
	path: '/produtos',
	method: 'post',
	headers: {
		'Accept': 'application/json',
		'Content-type' : 'application/json'
	}
};

var client = http.request(configuracoes,function(res){
	res.on("data",function(body){
		console.log("Corpo:" + body)
	});
});
 

var produto = {
	titulo : 'mais sobre node',
	descricao: 'mais um livro de node js para estudantes',
	preco : 39.90
}

client.end(JSON.stringify(produto));