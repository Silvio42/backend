const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para permitir JSON no corpo da requisição

// Rota GET
app.get('/', (req, res) => {
  res.send('Rota GET: Bem-vindo ao servidor Express!');
});

// Rota POST
app.post('/dados', (req, res) => {
  const { nome, idade } = req.body;
  res.send(`Rota POST: Nome recebido - ${nome}, Idade - ${idade}`);
});

// Rota PUT
app.put('/atualizar', (req, res) => {
  const { id, novoNome } = req.body;
  res.send(`Rota PUT: Usuário com ID ${id} foi atualizado para ${novoNome}`);
});

// Rota DELETE
app.delete('/deletar/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Rota DELETE: Usuário com ID ${id} foi deletado`);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});