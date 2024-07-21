var express= require('express'); 
var consign = require('consign');
var expressValid = require('express-validator')
var bodyParser = require('body-parser')
var app=express(); // app é o express

app.set('view engine','ejs'); //estamos informando ao expresse que o ejs é o
app.set('views', './app/views'); //como sever será importado em app, esse caminho
app.use(expressValid())
app.use(bodyParser.urlencoded({extended: true}))


consign().include('app/routes') //inclui o diretório de rotas
.then('config/dbConnection.js') // inclui a conexão com o banco no ssconsing
.then('app/models') // inclui o models dentro da app
.into(app);
//o consing reconece todos os arquivos da pasta  routes (faz um scan), pega esses módulos e inclui dentro do servidor - app

module.exports=app;
//o modulo vai retornar a variavel app
