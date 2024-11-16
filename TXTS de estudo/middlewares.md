1. O que são Middlewares?
Middlewares são funções que executam alguma lógica entre a requisição do cliente e a resposta enviada pelo servidor.

Exemplo de Middlewares:

app.use((req, res, next) => {
  console.log(`Método: ${req.method}, URL: ${req.url}`);
  next(); // Passa para o próximo middleware ou rota
});

2. Parâmetros de Rota (req.params)

Passa a URL como ID

http://localhost:3000/usuarios/123

3. Query Strings (req.query)

Passa a URL com ? com parâmetros de pesquisa

exemplo na pratica com o app.js 

http://localhost:3000/pesquisa?categoria=testes&preco=2