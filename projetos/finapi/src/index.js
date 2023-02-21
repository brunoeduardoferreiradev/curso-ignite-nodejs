const express = require('express');
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json());

const customers = [];

// POST /account - Cria uma conta
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  // Procura dentro de customers pra ver se ja existe um cpf
  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf);

  // Se o cpf ja existir retorna um erro 400 e uma mensagem de erro  
  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists" })
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });

  return response.status(201).json({ message: `ID : ${customers[0].id}` });

})

// GET /statement pegar o extrato do cliente
app.get("/statement", (request, response) => {
  const { cpf } = request.headers;

  const customer = customers.find(customer => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer Not Found" })
  }

  return response.json(customer.statement);

})


app.listen(3333);