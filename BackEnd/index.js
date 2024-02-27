const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post("/demo", (req, res) => {
  console.log(req.body); // Corrected to req.body
  const { param1, param2 } = req.query; // Access query parameters
  console.log(param1, param2); // Log the query parameters
  res.json(req.body);
});

server.listen(8080, () => {
  console.log("server started");
});

