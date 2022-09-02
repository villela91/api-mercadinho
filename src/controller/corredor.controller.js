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
module.exports = {
  findAllCorredoresController,
  findByIdCorredorController,
};
