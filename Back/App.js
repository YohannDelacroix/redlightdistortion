const express = require('express');
const app = express();
const fs = require('fs');
const { ppid } = require('process');
const functions = require('./Functions')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const credentials = require('./middleware/credentials')
const corsOptions = require('./config/corsOptions');

const path = require('path');
require('dotenv').config( {
  path: path.join(__dirname, "views", ".env")
});

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.json())

app.use(cookieParser());

const start = Date.now();

app.use('/register', require('./routes/api/register'));
app.use('/auth', require('./routes/api/auth'));
app.use('/tour', require('./routes/api/tour'));
app.use('/lyrics', require('./routes/api/lyrics'));
app.use('/pressKit', require('./routes/api/pressKit'));
app.use('/refresh', require('./routes/api/refresh'));
app.use('/logout', require('./routes/api/logout'));


module.exports = app;

