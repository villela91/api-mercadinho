require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/corredor.route.js');
const connectToDatabase = require('./src/dataBase/dataBase.js');

const port = process.env.PORT||3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/corredores', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
