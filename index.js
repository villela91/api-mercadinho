const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();


app.use(express.json());
app.use(cors());


const corredor = [
    {
      id:1,
      sabor: 'grãos, temperos e outros',
      descricao:
        'corredor onde encontra, café, açucar, arroz e etc.',
      foto: 'C:\Users\luizv\OneDrive\Documentos\api mercadinho\assets\img\corredor-do-cereal-no-supermercado-86437456.jpg',
      itens: [
        "arroz",
        "café",
        "açucar",
        "cereais matinais",
        "temperos variados",
        "feijão",
      ]
      ,
    },
    {
        id:2,
        sabor: 'massas, condimentos, oleos',
        descricao:
          'corredor onde encontra,massas, condimentos, oleos e etc.',
        foto: 'C:\Users\luizv\OneDrive\Documentos\api mercadinho\assets\img\corredor-do-cereal-no-supermercado-86437456.jpg',
        itens: [
          "macarrão variados",
          "macarrao intantaneos",
          "farafos",
          "molhos e extratos de tomate",
          "condimentos para lanches",
          "oleos e azeites para cozinha",
        ]
        ,
      },
      {
        id:3,
        sabor: 'materias de limpeza e higiene pessoal',
        descricao:
          'corredor onde encontra, materias de limpeza e higiene pessoal e etc.',
        foto: 'C:\Users\luizv\OneDrive\Documentos\api mercadinho\assets\img\corredor-do-cereal-no-supermercado-86437456.jpg',
        itens: [
          "amaciante",
          "sabão pessoal",
          "sabão para roupas",
          "papael higienico",
          "astes flexíveis de plastico com algodão na ponta",
          "desiventates,e perfumes para casa",
        ]
        ,
      },
  ];
  /* NOVO TRECHO */
  
  app.get('/corredores/corredor', (req, res) => {
    res.send(corredor);
  });

  app.get('/corredores/corredor/:id', (req, res) => {
    const parametrosID = Number(req.params.id);
    const escolhaCorredor = corredor.find((corredor) => corredor.id === parametrosID);
    res.send(escolhaCorredor);
  });
  /* NOVO TRECHO */
app.get('/', (req, res) =>{
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
