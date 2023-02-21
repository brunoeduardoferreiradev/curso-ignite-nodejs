const { request, response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json());

const customers = [];

// Middleware
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  console.log(cpf);
  console.log(customer);

  if (!customer) {
    return response.status(400).json({ error: "Customer Not Found" })
  }
  request.customer = customer;
  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === "credit") {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);
  return balance;
}

// GET /account - Traz a conta 
app.get("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  return response.json(customer);
})

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

  return response.status(201).json({ message: `ID : ${customers[0].id}` }).send();

})

// PUT /account  Atualiza o nome do usuario na conta  
app.put("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body;
  const { customer } = request;

  console.log(name);
  console.log(customer);

  customer.name = name;

  return response.status(201).send();
});

app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  // splice
  customers.splice(customer, 1);

  return response.status(200).json(customers);
})

// GET /statement pegar o extrato do cliente
app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  return response.json(customer.statement);

})

// GET /statement pegar o extrato do cliente
app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { date } = request.query;

  const dateFormat = new Date(date + " 00:00");

  const statement = customer.statement.filter(
    (statement) =>
      statement.created_at.toDateString() ===
      new Date(dateFormat).toDateString())

  return response.json(statement);

})

// POST /deposit  Fazer depósito na Conta
app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
  const { description, amount } = request.body;

  const { customer } = request;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit"
  }

  customer.statement.push(statementOperation);

  return response.status(201).send();

})

// POST /withdraw  Fazer o Saque na conta
app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body;
  const { customer } = request;
  // Calcula o saldo
  const balance = getBalance(customer.statement);

  // Verifica se existe saldo para fazer o sque
  if (balance < amount) {
    return response.status(400).json({ error: "Insufficient funds!!!" })
  }
  // Lança a operaçao de Débito
  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit"
  }

  customer.statement.push(statementOperation);

  return response.status(201).send();

})

app.get("/balance", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  const balance = getBalance(customer.statement);

  return response.json(balance);
})


app.listen(3333);