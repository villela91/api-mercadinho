const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const routes = require('./src/routes/corredor.route.js');
// const controller = require('./src/controller/corredor.controller.js');
// const service = require('./src/service/corredor.service.js');

app.use(express.json());
app.use(cors());
app.use('/corredores', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
