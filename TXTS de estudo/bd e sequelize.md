Para instalar as dependências

npm install sequelize mysql2

criar o banco no MYSQL com esses comandos:

1. CREATE DATABASE banco_teste;

2. show databases;

3. use banco_teste;

4. CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

5. INSERT INTO usuarios (nome, email, senha) 
VALUES ('Eduardo', 'eduardo@email.com', '123456'),
       ('Maria', 'maria@email.com', 'senha123');

