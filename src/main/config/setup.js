const cors = require('cors')
const corsOptions = require('../middlewares/cors-options')
const jsonParser = require('../middlewares/json-parser')
const contentType = require('../middlewares/content-type')
module.exports = (app) => {
  const whiteList = [
    process.env.API,
  ]
  app.disable('x-powered-by')
  app.use(cors(corsOptions(whiteList)))
  app.use(jsonParser)
  app.use(contentType)

};
