function LivrosDAO(connection){
	conn=connection;

	this.getlivros=function(connection,callback){
			conn.query('select * from livros', callback);
	}

	 this.getlivro=function(connection, callback){
	 	connection.query('select * from livros where id_livro=2', callback);

	 }

	this.salvarlivro=function( livro,connection, callback){
        connection.query('insert into livros set?', livro, callback);
	}
}

 module.exports = LivrosDAO;





