//Arquvo criado para facilitar a criação de rotas
const express = require("express");

const PaymentsController = require('./controllers/PaymentsController');

const routes = express.Router();

routes.get('/pagar', PaymentsController.index);

routes.get('/pagar/:cardnumber',PaymentsController.indexfilter);

routes.post('/pagar', PaymentsController.create);

routes.delete('/pagar/:id',PaymentsController.delete);

module.exports = routes;