const findAllController = require('../controllers/findAll')
const createController = require('../controllers/create')
const updateController = require('../controllers/update')
const deleteController = require('../controllers/delete')
module.exports = (app) => {  
  app.get('/biblioteca/find-all', findAllController.findAll)
  app.post('/biblioteca/create', createController.create)
  app.put('/biblioteca/update/:name', updateController.update)
  app.delete('/biblioteca/delete/:name', deleteController.delete)
  
};
