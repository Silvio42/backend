const fs = require('fs').promises;

async function salvarUsuario(nome, idade) {
  try {
    if (!nome || !idade) {
      throw new Error('Nome e idade são obrigatórios');
    }

    const data = { nome, idade };
    const caminho = './usuario.json';

    await fs.writeFile(caminho, JSON.stringify(data));
    console.log('Usuário salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar o usuário:', error.message);
  }
}

salvarUsuario('Eduardo', 25); // Funciona
salvarUsuario(null, 25); // Lança erro customizado
