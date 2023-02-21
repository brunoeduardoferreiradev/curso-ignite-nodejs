// chama a biblioteca do Express
const express = require('express');

// instancia o express
const app = express();

// é um middleware que faz a conversão par json
app.use(express.json());

/*
 * GET - Buscar Informaçao dentro do servidor
 * POST - Inserir uma informaçao no servidor
 * PUT - Alterar uma informaçao no servidor
 * PATCH - Alterar uma informação específica no servidor
 * DELETE - Deletar uma informação no servidor 
 */

/**
 * Tipos de Parâmetros
 * 
 * Route Params => identificar, editar, buscar ou deletar um recurso
 * Query Params => Paginação / Filtro
 * Body Params => Inserção ou Alteração de algum recurso ( JSON )
 */

// GET / courses
app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

// POST /courses
app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

// PUT /courses
app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

// PATCH /courses
app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

// DELETE / courses
app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"])
})

// porta onde a aplicação será inicializada
app.listen(3333);
