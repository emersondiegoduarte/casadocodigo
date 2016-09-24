var express = require('express');
var load = require('express-load');

module.exports = function configura(){
	var app = express();
	app.set("view engine", "ejs");
	app.set("views", "./app/views");

	load('routers', {cwd : 'app'})
	.then('infra')
	.into(app);

	return app;
} 