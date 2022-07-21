const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require('./routes/index.js');

const server = express();

server.name = "API";
server.use(morgan);
server.use(cors);
server.use(express.json());
server.use(express.urlencoded({ extended:false }));

server.use('/api', routes);

// Error catching endware
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
