const { Sequelize } = require('sequelize');

// Configurando a conexão com o banco
const sequelize = new Sequelize('banco_teste', 'root', '17123fon', {
  host: 'localhost',
  dialect: 'mysql',
});

// Testando a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;
