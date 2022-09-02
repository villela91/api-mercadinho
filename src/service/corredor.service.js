const corredores = [
  {
    id: 1,
    tipo: 'grãos, temperos e outros',
    descricao: 'corredor onde encontra, café, açucar, arroz e etc.',
    foto: 'C:UsersluizvOneDriveDocumentosapi mercadinhoassetsimgcorredor-do-cereal-no-supermercado-86437456.jpg',
    itens: [
      'arroz',
      'café',
      'açucar',
      'cereais matinais',
      'temperos variados',
      'feijão',
    ],
  },
  {
    id: 2,
    tipo: 'massas, condimentos, oleos',
    descricao: 'corredor onde encontra,massas, condimentos, oleos e etc.',
    foto: 'C:UsersluizvOneDriveDocumentosapi mercadinhoassetsimgcorredor-do-cereal-no-supermercado-86437456.jpg',
    itens: [
      'macarrão variados',
      'macarrao intantaneos',
      'farafos',
      'molhos e extratos de tomate',
      'condimentos para lanches',
      'oleos e azeites para cozinha',
    ],
  },
  {
    id: 3,
    tipo: 'materias de limpeza e higiene pessoal',
    descricao:
      'corredor onde encontra, materias de limpeza e higiene pessoal e etc.',
    foto: 'C:UsersluizvOneDriveDocumentosapi mercadinhoassetsimgcorredor-do-cereal-no-supermercado-86437456.jpg',
    itens: [
      'amaciante',
      'sabão pessoal',
      'sabão para roupas',
      'papael higienico',
      'astes flexíveis de plastico com algodão na ponta',
      'desiventates,e perfumes para casa',
    ],
  },
];

const findAllCorredoresService = () => {
  return corredores;
};
const findByIdCorredorservice = (parametrosID) => {
  return corredores.find((corredor) => corredor.id === parametrosID);
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
