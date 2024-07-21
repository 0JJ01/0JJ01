create database portal_biblioteca;
use portal_biblioteca;
create table livros (id_livro int not null primary key auto_increment, nome_livro varchar(100), autor_livro varchar(100));
insert into livros (titulo, livro) values ("primeiro livros", "a biblioteca foi lançado");
insert into livros (titulo, livro) values ("segundo livro", "a sua biblioteca está a todo vapor");
select * from livros
