const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://manoel-omonistack:FreeBird@cluster0-w5lqs.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);


// MÉTODOS HTTP: GET, POST, PUT, DELETE

// TIPOS DE PARÂMETROS:
// Query params: request.query (Filtros, ordenação, paginação, ...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para a criação ou alteração de um registro)

// MongoDB (Não-relacional)