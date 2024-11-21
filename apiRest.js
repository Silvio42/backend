const express = require('express');
const jwt = require('jsonwebtoken'); // Biblioteca JWT
const app = express();
const PORT = 3000;

// Chave secreta para assinar os tokens
const SECRET = 'segredo_super_secreto';

// Middleware para JSON
app.use(express.json());

// Dados simulados
const usuarios = [
  { id: 1, nome: 'Eduardo', email: 'eduardo@email.com', senha: '654' },
];

// Rota pública
app.get('/', (req, res) => {
  res.send('Bem-vindo à API REST!');
});

// Rota de login (gera o token)
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Verifica se o usuário existe
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  if (!usuario) {
    return res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }

  // Gera o token JWT
  const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware para verificar o token
const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Captura o cabeçalho Authorization
  const token = authHeader && authHeader.split(' ')[1]; // Remove o prefixo "Bearer"

  if (!token) {
    return res.status(403).json({ mensagem: 'Token não fornecido' });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensagem: 'Token inválido' });
    }

    req.usuario = decoded; // Adiciona os dados do token na requisição
    next();
  });
};

// Rota protegida: lista de usuários
app.get('/usuarios', verificarToken, (req, res) => {
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
