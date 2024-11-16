const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware de log
app.use((req, res, next) => {
  console.log(`Método: ${req.method}, URL: ${req.url}`);
  next();
});

// Lista de tarefas (dados em memória)
let tarefas = [];

// Rota GET: Listar todas as tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// Rota POST: Adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo, status } = req.body;
  const novaTarefa = { id: tarefas.length + 1, titulo, status };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// Rota GET: Buscar tarefa por ID
app.get('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) {
    return res.status(404).send('Tarefa não encontrada');
  }
  res.json(tarefa);
});

// Rota PUT: Atualizar tarefa por ID
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, status } = req.body;
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) {
    return res.status(404).send('Tarefa não encontrada');
  }
  tarefa.titulo = titulo || tarefa.titulo;
  tarefa.status = status || tarefa.status;
  res.json(tarefa);
});

// Rota DELETE: Deletar tarefa por ID
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tarefas = tarefas.filter(t => t.id !== id);
  res.send('Tarefa deletada com sucesso');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
