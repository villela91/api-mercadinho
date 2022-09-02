const corredoresService = require('../service/corredor.service.js');

const findAllCorredoresController = (req, res) => {
  const corredores = corredoresService.findAllCorredoresService();
  if (corredores.length == 0) {
    return res
      .status(404)
      .send({ message: 'não existe nenhum corredor cadastrado' });
  }
  res.send(corredores);
};
const findByIdCorredorController = (req, res) => {
  const parametrosID = Number(req.params.id);

  if (!parametrosID) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

  const escolhaCorredor =
    corredoresService.findByIdCorredorservice(parametrosID);
  if (!escolhaCorredor) {
    return res.status(404).send({ message: 'Corredor não encontrado!' });
  }
  res.send(escolhaCorredor);
};
const createCorredorController = (req, res) => {
  const Corredor = req.body;
  if (
    !Corredor ||
    !Corredor.tipo ||
    !Corredor.descricao ||
    !Corredor.foto ||
    !Corredor.itens
  ) {
    return res
      .status(400)
      .send({ message: 'envie todos os campos do corredor completo!' });
  }
  const newCorredor = corredoresService.createCorredorService(Corredor);
  res.status(201).send(newCorredor);
};

const updateCorredorController = (req, res) => {
  const parametrosID = Number(req.params.id);
  if (!parametrosID) {
    return res.status(400).send({ message: 'Id invalido!' });
  }
  const corredorEdit = req.body;
  if (
    !corredorEdit ||
    !corredorEdit.tipo ||
    !corredorEdit.descricao ||
    !corredorEdit.foto ||
    !corredorEdit.itens
  ) {
    return res
      .status(400)
      .send({ message: 'envie todos os campos do corredor completo!' });
  }
  const updatedCorredor = corredoresService.updateCorredorService(
    parametrosID,
    corredorEdit,
  );
  res.send(updatedCorredor);
};
const deleteCorredorController = (req, res) => {
  const parametrosID = Number(req.params.id);
  if (!parametrosID) {
    return res.status(400).send({ message: 'Id invalido!' });
  }
  const escolhaCorredor = corredoresService.deleteCorredorService(parametrosID);

  if (!escolhaCorredor) {
    return res.status(404).send({ message: 'Corredor não encontrado!' });
  }
  res.send({ message: 'Corredor deletado com sucesso!' });
};
module.exports = {
  findAllCorredoresController,
  findByIdCorredorController,
  createCorredorController,
  updateCorredorController,
  deleteCorredorController,
};
