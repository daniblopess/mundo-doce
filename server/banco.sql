USE test;

/* 
  Cria banco de dados
*/
DROP DATABASE IF EXISTS MundoDoce;
CREATE DATABASE MundoDoce;

/* 
  Cria tabelas
*/
DROP TABLE IF EXISTS MundoDoce.Produto;
CREATE TABLE IF NOT EXISTS MundoDoce.Produto(
   id     INT  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,nome   VARCHAR(50) NOT NULL
  ,preco  DECIMAL(5,2) NOT NULL
  ,imagem VARCHAR(20) NOT NULL
  ,idCategoria INT NOT NULL
);

DROP TABLE IF EXISTS MundoDoce.Categoria;
CREATE TABLE IF NOT EXISTS MundoDoce.Categoria (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,descricao varchar(30) NOT NULL
);

ALTER TABLE MundoDoce.Produto ADD FOREIGN KEY (idCategoria) REFERENCES MundoDoce.Categoria (id);

/*
  Insere tipos de produtos
*/
INSERT INTO MundoDoce.Categoria(descricao) VALUES ('Bala de gelatina');
INSERT INTO MundoDoce.Categoria(descricao) VALUES ('Chocolate');
INSERT INTO MundoDoce.Categoria(descricao) VALUES ('Caixa de chocolate');
INSERT INTO MundoDoce.Categoria(descricao) VALUES ('Picolé/Sorvete');

/*
  Insere produtos nas tabelas
*/
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Balas de Amora Fini',5,'amora',1);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Balas de Dentadura Fini',4.5,'dentadura',1);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Balas de Melancia Fini',5,'melancia',1);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Balas Ice-Cream Fini',4.75,'ice-cream',1);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Chocolate Suflair',5.2,'suflair',2);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Chocolate Crunch',6,'crunch',2);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('KitKat White',4.5,'kitkat-white',2);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Caixa Nestlé',18,'caixa-nestle',3);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Cornetto',12.25,'cornetto',4);
INSERT INTO MundoDoce.Produto(nome,preco,imagem,idCategoria) VALUES ('Picolé Diamante Negro',10.5,'picole-diamante',4);
