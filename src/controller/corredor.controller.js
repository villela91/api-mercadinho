const corredoresService = require('../service/corredor.service.js');

const findAllCorredoresController = (req, res) => {
  const corredores = corredoresService.findAllCorredoresService();
  res.send(corredores);
};
const findByIdCorredorController = (req, res) => {
  const parametrosID = Number(req.params.id);
  const escolhaCorredor =
    corredoresService.findByIdCorredorservice(parametrosID);
  res.send(escolhaCorredor);
};
const createCorredorController = (req, res) => {
  
  const Corredor= req.body;
  const newCorredor = corredoresService.createCorredorService(Corredor);
  res.send(newCorredor);
};

const updateCorredorController = (req, res) => {
  const parametrosID = Number(req.params.id);
  const corredorEdit = req.body;
  const updatedCorredor = corredoresService.updateCorredorService(parametrosID, corredorEdit);
  res.send(updatedCorredor);
};
const deleteCorredorController = (req, res) => {
   const parametrosID = req.params.id;
  corredoresService.deleteCorredorService(parametrosID);
  res.send({ message: 'Corredor deletado com sucesso!' });
};
module.exports = {
  findAllCorredoresController,
  findByIdCorredorController,
  createCorredorController,
  updateCorredorController,
  deleteCorredorController,
};
