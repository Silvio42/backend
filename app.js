const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware de log
app.use((req, res, next) => {
  console.log(`Método: ${req.method}, URL: ${req.url}`);
  next();
});

// Rota com Parâmetro de Rota
app.get('/produto/:id', (req, res) => {
  const produtoId = req.params.id;
  res.send(`Produto com ID: ${produtoId}`);
});

// Rota com Query String
app.get('/pesquisa', (req, res) => {
  const categoria = req.query.categoria;
  const preco = req.query.preco;
  res.send(`Categoria: ${categoria}, Preço máximo: ${preco}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
