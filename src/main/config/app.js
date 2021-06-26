const express = require("express");
const dotenv = require("dotenv");
const app = express();
const setupApp = require("./setup");
const setupRoutes = require("./routes");
dotenv.config();
setupApp(app);
setupRoutes(app);
module.exports = app;
