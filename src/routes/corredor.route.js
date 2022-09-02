const route = require('express').Router();
const controllerCorredores = require('../controller/corredor.controller.js');

route.get('/corredor', controllerCorredores.findAllCorredoresController);
route.get('/corredor/:id', controllerCorredores.findByIdCorredorController);
route.post('/create', controllerCorredores.createCorredorController);
route.put('/update/:id', controllerCorredores.updateCorredorController);
route.delete('/delete/:id', controllerCorredores.deleteCorredorController);

module.exports = route;
