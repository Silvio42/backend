const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

// Configuração do middleware para cookies
app.use(cookieParser());

// Rota para definir um cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('nome', 'Eduardo', { maxAge: 60000 }); // Expira em 1 minuto
  res.send('Cookie definido com sucesso!');
});

// Rota para acessar um cookie
app.get('/get-cookie', (req, res) => {
  const nome = req.cookies.nome;
  if (nome) {
    res.send(`Olá, ${nome}`);
  } else {
    res.send('Nenhum cookie encontrado.');
  }
});

// Rota para apagar um cookie
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('nome');
  res.send('Cookie removido com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
