Enunciado do Desafio de Back-end
Desenvolver uma aplicação de gerenciamento de tarefas (To-Do List) com autenticação de usuários.

Requisitos do Desafio
1. Cadastro e Login de Usuários
Crie uma API REST para gerenciar o cadastro e login de usuários.
Use JWT para autenticação:
No login, gere um token JWT para o usuário autenticado.
Proteja todas as rotas relacionadas às tarefas, exigindo que o token seja enviado no cabeçalho.
2. Gerenciamento de Tarefas
Implemente as seguintes rotas para manipular tarefas:
Criar tarefa (POST): Salve no banco de dados informações como título, descrição, status (pendente, concluído) e o ID do usuário.
Consultar tarefas (GET): Liste todas as tarefas do usuário logado.
Atualizar tarefa (PUT): Atualize o título, descrição ou status de uma tarefa.
Excluir tarefa (DELETE): Remova uma tarefa específica.
3. Banco de Dados Relacional (Sequelize)
Configure o banco de dados para armazenar:
Usuários: ID, nome, email, senha (criptografada), datas de criação e atualização.
Tarefas: ID, título, descrição, status, ID do usuário (chave estrangeira), datas de criação e atualização.
Use o Sequelize para gerenciar os modelos e a sincronização com o banco.
4. Manipulação de Arquivos
Adicione uma funcionalidade para salvar as tarefas concluídas do usuário em um arquivo .txt usando o módulo fs.
Inclua a data da exportação no nome do arquivo (exemplo: tarefas_concluidas_2024-11-21.txt).
5. Tratamento de Erros
Garanta que a aplicação trate erros, como:
Tentativas de acessar rotas protegidas sem autenticação.
Erros no banco de dados.
Validação de dados enviados (ex.: e-mails inválidos ou campos obrigatórios ausentes).
6. Middlewares
Crie middlewares para:
Validar o token JWT antes de acessar rotas protegidas.
Registrar logs no terminal sempre que uma rota for acessada, incluindo o método HTTP, a URL e o horário.
7. Cookies e Sessões
Adicione uma funcionalidade para armazenar o token do usuário em um cookie e permitir que ele seja reutilizado para autenticação.
Opcionalmente, armazene informações básicas do usuário (como nome) em uma sessão.
Fluxo de Exemplo
O usuário faz cadastro e login.
Recebe um token JWT que será usado para acessar as rotas protegidas.
Cria, lista, atualiza e exclui tarefas associadas ao seu usuário.
Exporta as tarefas concluídas para um arquivo .txt.
O sistema gera mensagens de erro claras quando algo dá errado.
Dicas
Teste cada funcionalidade no Postman para garantir que tudo está funcionando como esperado.
Divida o projeto em pastas organizadas, como:
bash
Copiar código
/models      -> Modelos Sequelize
/routes      -> Arquivos de rotas
/middleware  -> Middlewares personalizados
/controllers -> Lógica das rotas
Esse desafio engloba todos os tópicos estudados, mas é direto o suficiente para ser implementado em algumas horas de prática. Se precisar de ajuda com qualquer parte, é só me chamar! 🚀