const LivrosDAO = require('../models/LivrosDAO');

module.exports=function(app){
                  
	app.get('/livro', function(req,res){ //exporta a funçao

			

		 var connection= app.config.dbConnection();
		  //depois do refactoring, recebemos o app por parametro, então é somente recuperar o módulo dentro do app.

		
		  var LivrosModel= new LivrosDAO(connection);

		  LivrosModel.getlivro(connection, function(error,result){
			  if (error){
				  console.log(error);
			  }
			
				 //seleciona uma noticia especifica em que o id=2  
			res.render('livros/livro',{livro: result}) //res.render redenriza
			//noticia/noticia é a pasta e a arquivo de rotas depois
			});  
	});
	}