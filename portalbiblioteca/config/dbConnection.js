var mysql=require('mysql2');//esta importando o modulo mysql

		var connMySQL= function(){//funcao que cria conexao com o banco
			console.log('Conexão com bd foi estabelecida');
			return mysql.createConnection({//criando uma conexao com o banco mysql 
			host: 'localhost',//configuracao para fazer a conexao com o banco mysql
			user: 'root',//configuracao para fazer a conexao com o banco mysql
			password: 'ifms',//configuracao para fazer a conexao com o banco mysql
			database: 'portal_noticias'//configuracao para fazer a conexao com o banco mysql

		});
                                         
		}

		module.exports=function(){//exportando a conexao
			console.log('O autolod carregou o módulo de conexão com o bd')
			return connMySQL;
		}