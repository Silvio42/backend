const express = require('express');
const sequelize = require('./database');
const Usuario = require('./models/Usuario');

const app = express();
const PORT = 3000;

app.use(express.json());

// Sincronizar o banco de dados
(async () => {
  try {
    await sequelize.sync({ force: false }); // force: true recria tabelas
    console.log('Banco de dados sincronizado!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();

// Rota para criar um usuário
app.post('/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuario = await Usuario.create({ nome, email, senha });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar usuário', erro: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
