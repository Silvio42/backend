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

app.get('/usuarios/:id', async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await Usuario.findByPk(usuarioId); // Busca usuário pelo ID
    if (usuario) {
      res.json(usuario); // Retorna o usuário encontrado
    } else {
      res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuário', erro: error.message });
  }
});

app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.destroy({ where: { id } }); // Deleta o usuário pelo ID
    if (usuario) {
      res.json({ mensagem: `Usuário com ID ${id} foi deletado com sucesso` });
    } else {
      res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar usuário', erro: error.message });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params; // ID do usuário a ser atualizado
  const { nome, email, senha } = req.body; // Dados atualizados

  try {
    // Verifica se o usuário existe
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    // Atualiza o usuário com os dados enviados
    await usuario.update({ nome, email, senha });

    // Retorna o usuário atualizado
    res.json({ mensagem: 'Usuário atualizado com sucesso', usuario });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar usuário', erro: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
