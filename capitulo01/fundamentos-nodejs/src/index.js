// chama a biblioteca do Express
const express = require('express');

// instancia o express
const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World Ignite - Fundamentos NodeJS!" })
})

// porta onde a aplicação será inicializada
app.listen(3333);
