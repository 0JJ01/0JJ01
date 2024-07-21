const LivrosDAO= require('../models/LivrosDAO');

module.exports=function(app){ //exporta a função

                  
	app.get('/livros', function(req,res){
		 var connection= app.config.dbConnection();
		 //depois do refactoring, recebemos o app por parametro, então é somente recuperar o módulo dentro do app.
		//diminui a necessidade de ter requires no projeto

		var LivrosModel= new LivrosDAO(connection);
		LivrosModel.getlivros(connection, function(error,result){
			if (error){
				console.log(error)
			}
			console.log(result)
		
			res.render('livros/livros.ejs',{livros: result}) //res.render renderiza
			//noticias/noticias.ejs é a pasta e a aplicaçao depois
		});  
			});  
		};