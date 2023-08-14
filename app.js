require('dotenv').config();
express('express-async-errors');
const express = require('express');
const errorHandler = require('./handler/errorHandler');

const app = express();

app.use(express.json());

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});