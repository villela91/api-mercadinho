const mongoose = require('mongoose');

const CorredorSchema = new mongoose.Schema({
  id: { type: String, require: true },
  tipo: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  itens: {
    type: String,
    require: true,
  },
});

const Corredor = mongoose.model('corredores', CorredorSchema);

module.exports = Corredor;
