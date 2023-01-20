const express = require('express');
const app = express();
const fs = require('fs');
const { ppid } = require('process');
const functions = require('./Functions')

const path = require('path');
require('dotenv').config( {
  path: path.join(__dirname, "views", ".env")
});

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin',
    '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  

app.use(express.json())

const start = Date.now();

app.use('/register', require('./routes/api/register'))
app.use('/tour', require('./routes/api/tour'));
app.use('/lyrics', require('./routes/api/lyrics'))


module.exports = app;

