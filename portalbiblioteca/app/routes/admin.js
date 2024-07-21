

const LivrosDAO = require('../models/LivrosDAO');


module.exports=function(app){//exportandando as rotas do formulario para vc salvar no banco de dados


app.get('/formulario_inclusao_livro',function(req,res){//criando a rota do formulario
res.render('admin/form_add_livro.ejs', {validacao:{}, livro:{}});//renderizando o formulario


});


app.post('/livros/salvar', function(req,res){ /* rota que salva no bd quando for clicada no botap*/
    var livro=req.body;

	console.log(livro)

    req.assert('titulo','Título é obrigatória').notEmpty();
    req.assert('resumo','Resumo é obrigatória').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('livro','Livro é obrigatótia').notEmpty();
    req.assert('data_livro','Data dO livro é obrigatória').notEmpty();
    var erros=req.validationErrors();
    if(erros){
        res.render('admin/form_add_livro.ejs',{validacao:erros, livro:livro});
        return;
    }


    var connection=app.config.dbConnection();

		LivrosModel=new LivrosDAO(connection);


   LivrosModel.salvarlivro(livro, connection,function(error,result){
        res.redirect('/livros');
    });
});


}
