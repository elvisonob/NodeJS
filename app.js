const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>The "Add Product" Page<h1>');
});

app.use('/', (req, res, next) => {
  res.send('This always runs');
  next();
});

app.listen(3000);
