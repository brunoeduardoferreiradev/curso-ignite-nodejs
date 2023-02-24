const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(cors());
app.use(express.json());

// Cria um array de usuários vazio
const users = [];

// Middleware para verificar se o usuario existe
function checksExistsUserAccount(request, response, next) {
  // pega o usuario do header
  const { username } = request.headers;

  // verifica se o usuário existe no array 
  const user = users.find((user) => user.username === username);

  if (!user) {
    return response.status(404).json({ error: "Mensagem do erro" })
  }
  request.user = user;
  return next();

}

//POST /users - Cadastra o Usuário
app.post('/users', (request, response) => {
  const { name, username } = request.body;

  // Procura dentro de users pra ver se ja existe um username
  const userAlreadyExists = users.some(
    (user) => user.username === username);

  // Se o username ja existir retorna um erro 400 e uma mensagem de erro  
  if (userAlreadyExists) {
    return response.status(400).json({ error: "Usuário já existe" })
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: []
  };

  users.push(user);

  return response.status(201).json({ message: user }).send();
});

//GET /todos - Traz os Todos
app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos)
});

// POST /todos  - Cadastra os Todos
app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const { user } = request;

  const todo = {
    id: uuidv4(),
    title: title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(todo);

  return response.status(201).json({ message: todo }).send();

});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;