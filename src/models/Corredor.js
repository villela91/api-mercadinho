const mongoose = require('mongoose');

const CorredorSchema = new mongoose.Schema({
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
  itens:{
    type:String,
    require: true,
  },
});

const corredor = mongoose.model('corredores', CorredorSchema);

module.exports = corredor;
