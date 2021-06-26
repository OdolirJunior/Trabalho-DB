const MongoClient = require('mongodb').MongoClient;
module.exports = {
  async create (req, res) {
    const {body, params } =  req;

    if(!body){
      res.status(401).send("Faltando informação");
    }
    if(!body.titulo){
      res.status(401).send("Faltando informação");
    }
    if(!body.descricao){
      res.status(401).send("Faltando informação");
    }
    if(!body.paginas){
      res.status(401).send("Faltando informação");
    }
    if(!body.autor){
      res.status(401).send("Faltando informação");
    }
    if(!body.biblioteca){
      res.status(401).send("Faltando informação");
    }
    
    try{
      const client = new MongoClient(process.env.MONGO_URL);
      await client.connect(function(err) {    
      const db = client.db(process.env.DB_NAME);          
      findBibliotecas(db, req, (data) => {
        req.biblioteca = data;
        createBiblioteca(db, req, () => {
          client.close();
          res.status(201).send(true)
        })
      })
        
      });
            
    } catch (err) {
      return res.status(500).send("Server Error")
    }
    
  }
}

const createBiblioteca = async  (db, req, callback) => {    
  const collection = db.collection('livro');  
  await collection.insertOne(req.body, (err, result) => {
    callback(result);
  })
};

const findBibliotecas = (db, req, callback) => {  
  const collection = db.collection('biblioteca');  
  collection.find({name: req.body.biblioteca}).toArray(function(err, docs) {      
    callback(docs);
  });
};