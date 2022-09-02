const route = require('express').Router();
const controllerCorredores = require('../controller/corredor.controller.js');

route.get('/corredor', controllerCorredores.findAllCorredoresController);
route.get('/corredor/:id', controllerCorredores.findByIdCorredorController);

module.exports = route;
