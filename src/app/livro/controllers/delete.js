const MongoClient = require('mongodb').MongoClient;
module.exports = {
  async delete (req, res) {
    try{
      const client = new MongoClient(process.env.MONGO_URL);
      await client.connect(function(err) {    
      const db = client.db(process.env.DB_NAME);          
        deleteBiblioteca(db, req, () => {
          client.close();
          res.status(201).send(true)
        })
      });
            
    } catch (err) {
      return res.status(500).send("Server Error")
    }

  }
}

const deleteBiblioteca = async  (db, req, callback) => {    
  const collection = db.collection('livro');  
  await collection.deleteOne({titulo: req.params.titulo}, (err, result) => {
    callback(result);
  })
  
};