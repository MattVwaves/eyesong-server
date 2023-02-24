const app = require('./server.js');
const db = require('../db');
const port = 3030;

app.listen(port, () => {
  console.log(`[SERVER] Running on http://localhost:${port}/`);
});

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
