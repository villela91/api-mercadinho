const corredores = [
  {
    id: 1,
    sabor: 'grãos, temperos e outros',
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
    sabor: 'massas, condimentos, oleos',
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
    sabor: 'materias de limpeza e higiene pessoal',
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

module.exports = {
  findAllCorredoresService,
  findByIdCorredorservice,
};
