const express = require('express');
const session = require('express-session');

const app = express(); // Inicializa o Express
const PORT = 3000; // Porta do servidor

// Configuração do middleware para sessões
app.use(
  session({
    secret: 'segredo_super_secreto', // Chave para criptografar a sessão
    resave: false, // Não salva a sessão se não houver mudanças
    saveUninitialized: false, // Não cria sessões vazias
    cookie: { maxAge: 60000 }, // Expira em 1 minuto
  })
);

// Rota para configurar uma sessão
app.get('/set-session', (req, res) => {
  req.session.nome = 'Eduardo';
  res.send('Sessão configurada com sucesso!');
});

// Rota para acessar a sessão
app.get('/get-session', (req, res) => {
  if (req.session.nome) {
    res.send(`Bem-vindo de volta, ${req.session.nome}`);
  } else {
    res.send('Nenhuma sessão ativa.');
  }
});

// Rota para destruir a sessão
app.get('/destroy-session', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).send('Erro ao destruir a sessão');
    } else {
      res.send('Sessão encerrada com sucesso!');
    }
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
