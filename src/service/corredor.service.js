const Corredores = require('../models/Corredor')

const findAllCorredoresService = async() => {
  const corredores = await Corredores.find();
  return corredores;
};
const findByIdCorredorservice = async (parametrosID) => {
  const corredor =await Corredores.fndById(parametrosID)
  return corredor;
};
const createCorredorService = (newCorredor) => {
  const newId = corredores.length + 1;
  newCorredor.id = newId;
  corredores.push(newCorredor);
  return newCorredor;
};
const updateCorredorService = (id, corredorEdited) => {
  corredorEdited['id'] = id;
  const corredorIndex = corredores.findIndex((corredor) => corredor.id == id);
  corredores[corredorIndex] = corredorEdited;
  return corredorEdited;
};
const deleteCorredorService = (id) => {
  const corredorIndex = corredores.findIndex((corredor) => corredor.id == id);
  return corredores.splice(corredorIndex, 1);
};

module.exports = {
  findAllCorredoresService,
  findByIdCorredorservice,
  createCorredorService,
  updateCorredorService,
  deleteCorredorService,
};
