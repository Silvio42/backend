const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importa a configuração do banco

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obrigatório
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // O email deve ser único
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'usuarios', // Nome da tabela no banco de dados
  timestamps: true, // Adiciona os campos createdAt e updatedAt
});

module.exports = Usuario; // Exporta o modelo
