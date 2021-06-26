const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
module.exports = {
  async findAll (req, res) {
    try{
      const client = new MongoClient(process.env.MONGO_URL);
      client.connect(function(err) {    
      const db = client.db(process.env.DB_NAME);  
        console.log('Connected successfully to server');    
        findBibliotecas(db, (data) => {
          client.close();
          res.status(200).send(data)
        })
      });
      
 
      
    } catch (err) {
      return res.status(500).send("Server Error")
    }

  }
}

 
const findBibliotecas = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('biblioteca');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);     
    console.log(docs) 
    callback(docs);
  });
};