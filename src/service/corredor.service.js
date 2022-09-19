const Corredores = require('../models/Corredor')

const findAllCorredoresService = async() => {
  const corredores = await Corredores.find();
  return corredores;
};
const findByIdCorredorservice = async (parametrosID) => {
  
  const corredor =await Corredores.findById(parametrosID)
  return corredor;
};
const createCorredorService = (newCorredor) => {
  const newId = Corredores.length + 1;
  newCorredor.id = newId;
  Corredores.create(newCorredor)
  return newCorredor;
};
const updateCorredorService = (id, corredorEdited) => {
  corredorEdited['id'] = id;
  const corredorIndex = Corredores.findIndex((corredor) => corredor.id == id);
  Corredores[corredorIndex] = corredorEdited;
  return corredorEdited;
};
const deleteCorredorService = (id) => {
  const corredorIndex = Corredores.findIndex((corredor) => corredor.id == id);
  return Corredores.splice(corredorIndex, 1);
};

module.exports = {
  findAllCorredoresService,
  findByIdCorredorservice,
  createCorredorService,
  updateCorredorService,
  deleteCorredorService,
};
