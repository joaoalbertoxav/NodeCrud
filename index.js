import express from "express";
const app = express();
const PORT = 666;


app.use(express.json());

const produtosBebidas = [
    {
      id: 1,
      nome: "Teachers",
      tipo: "Destilado",
      marca: "Glenfiddich",
      volume: "750ml",
      preco: 250.00,
      estoque: 50
    },
    {
      id: 2,
      nome: "Periquita",
      tipo: "Vinho",
      marca: "Château Margaux",
      volume: "750ml",
      preco: 150.00,
      estoque: 100
    },
    {
      id: 3,
      nome: "Skol",
      tipo: "Cerveja",
      marca: "Goose Island",
      volume: "330ml",
      preco: 10.00,
      estoque: 200
    },
    {
      id: 4,
      nome: "Slova",
      tipo: "Destilado",
      marca: "Absolut",
      volume: "1L",
      preco: 80.00,
      estoque: 80
    },
    {
      id: 5,
      nome: "Cidra",
      tipo: "Espumante",
      marca: "Moët & Chandon",
      volume: "750ml",
      preco: 300.00,
      estoque: 30
    },
    {
      id: 6,
      nome: "Gin",
      tipo: "Destilado",
      marca: "Bombay Sapphire",
      volume: "700ml",
      preco: 120.00,
      estoque: 60
    },
    {
      id: 7,
      nome: "Montila",
      tipo: "Destilado",
      marca: "Havana Club",
      volume: "700ml",
      preco: 50.00,
      estoque: 100
    },
    {
      id: 8,
      nome: "Tesquila",
      tipo: "Destilado",
      marca: "Patrón",
      volume: "750ml",
      preco: 90.00,
      estoque: 70
    },
    {
      id: 9,
      nome: "Licor de cacau xavier",
      tipo: "Destilado",
      marca: "Baileys",
      volume: "750ml",
      preco: 40.00,
      estoque: 150
    },
    {
      id: 10,
      nome: "Sakê",
      tipo: "Sakê",
      marca: "Gekkeikan",
      volume: "720ml",
      preco: 25.00,
      estoque: 120
    },
    {
      id: 11,
      nome: "Sidra",
      tipo: "Sidra",
      marca: "Strongbow",
      volume: "500ml",
      preco: 15.00,
      estoque: 80
    },
    {
      id: 12,
      nome: "Licor de Café",
      tipo: "Licor",
      marca: "Kahlúa",
      volume: "750ml",
      preco: 35.00,
      estoque: 90
    },
    {
      id: 13,
      nome: "Vinho Branco",
      tipo: "Vinho",
      marca: "Sauvignon Blanc",
      volume: "750ml",
      preco: 20.00,
      estoque: 200
    },
    {
      id: 14,
      nome: "Cachaça Ypioca",
      tipo: "Destilado",
      marca: "Leblon",
      volume: "1L",
      preco: 30.00,
      estoque: 300
    },
    {
      id: 15,
      nome: "Espumante Rosé",
      tipo: "Espumante",
      marca: "Ruinart",
      volume: "750ml",
      preco: 40.00,
      estoque: 70
    },
    {
      id: 16,
      nome: "Cerveja Lager",
      tipo: "Cerveja",
      marca: "Heineken",
      volume: "330ml",
      preco: 8.00,
      estoque: 250
    },
    {
      id: 17,
      nome: "Vinho Rosé",
      tipo: "Vinho",
      marca: "Domaine Ott",
      volume: "750ml",
      preco: 25.00,
      estoque: 120
    },
    {
      id: 18,
      nome: "Soda",
      tipo: "Misturador",
      marca: "Schweppes",
      volume: "1L",
      preco: 5.00,
      estoque: 500
    },
    {
      id: 19,
      nome: "Água Mineral",
      tipo: "Água",
      marca: "Evian",
      volume: "500ml",
      preco: 2.00,
      estoque: 800
    },
    {
      id: 20,
      nome: "Energético",
      tipo: "Energético",
      marca: "Red Bull",
      volume: "250ml",
      preco: 6.00,
      estoque: 400
    },

  ];

app.get('/list', (req,res) => {
    res.send(produtosBebidas)
})


app.get('/list/:id', (req,res) => {
    let id = req.params.id
    let bebida = produtosBebidas.find (bebida => bebida.id === parseInt(id))
    res.send(bebida)
})


app.post('/cadastro', (req,res) => {
    let corpo = req.body
    produtosBebidas.push(corpo)
    res.json(produtosBebidas)    
})


app.delete('/delete/:id', (req,res) => {
    let id = req.params.id
    let converteId = Number(id-1)

    try{
        produtosBebidas.slice(converteId,1)
        res.status(204).send("bebida deletada")
    } 

    catch(error){
        res.send(`Aqui o erro ${error}`).status(500)
    }
})


app.put('/editar/:id', (req,res) => {
    let id = req.params.id
    let corpo = req.body
    let produto = produtosBebidas.find(produto => produto.id === parseInt(id))

    try{
        produtosBebidas[produto.id-1] = corpo 
        res.json(produtosBebidas).send(200)
    }

    catch(error) {
        res.send(500).send(`Aqui esta o seu erro ${error}`)
    }
})


app.listen (PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`)
})