const findAllController = require('../controllers/findAll')
const createController = require('../controllers/create')
const updateController = require('../controllers/update')
const deleteController = require('../controllers/delete')
module.exports = (app) => {  
  app.get('/livro/find-all', findAllController.findAll)
  app.post('/livro/create', createController.create)
  app.put('/livro/update/:titulo', updateController.update)
  app.delete('/livro/delete/:titulo', deleteController.delete)
  
};
