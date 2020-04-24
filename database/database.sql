CREATE DATABASE typescriptdatabase;

-- \l  = listar data base
-- \dt  = listar tablas
-- \d = descripcion de las tablas  
-- \c typescriptdatabase  = ubicarse en un database  ;


create table users(
    id  SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email  text
);


insert into users (name,email)
VALUES ('Chimuelo Martion','gatoNegro@gmail.com');