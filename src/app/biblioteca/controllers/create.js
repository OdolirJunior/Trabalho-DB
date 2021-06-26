const MongoClient = require('mongodb').MongoClient;
module.exports = {
  async create (req, res) {
    try{
      const client = new MongoClient(process.env.MONGO_URL);
      await client.connect(function(err) {    
      const db = client.db(process.env.DB_NAME);          
         createBiblioteca(db, req, () => {
          client.close();
          res.status(201).send(true)
        })
      });
            
    } catch (err) {
      return res.status(500).send("Server Error")
    }

  }
}

const createBiblioteca = async  (db, req, callback) => {    
  const collection = db.collection('biblioteca');  
  await collection.insertOne(req.body, (err, result) => {
    callback(result);
  })
  
};