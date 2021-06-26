const MongoClient = require('mongodb').MongoClient;
module.exports = {
  async update (req, res) {
    try{
      const client = new MongoClient(process.env.MONGO_URL);
      await client.connect(function(err) {    
      const db = client.db(process.env.DB_NAME);          
      updateBiblioteca(db, req, () => {
          client.close();
          res.status(201).send(true)
        })
      });
            
    } catch (err) {
      return res.status(500).send("Server Error")
    }

  }
}

const updateBiblioteca = async  (db, req, callback) => {    
  const collection = db.collection('livro');  
  await collection.updateOne(
    {titulo: req.params.titulo}, 
    {$set:{ 
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      paginas: req.body.paginas,
      autor: req.body.autor,
      biblioteca: req.body.biblioteca }
    }, (err, result) => {
    callback(result);
  })
  
};