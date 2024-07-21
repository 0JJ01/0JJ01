module.exports=function(app){ //essa exporta 

app.get('/', function(req,res){ //é a primeira rota do projeto 
		res.render('home/home.ejs');//essa esta renderizando a rota
});

}