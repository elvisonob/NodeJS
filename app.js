const express = require('express');

const app = express();

app.get('/', (res, req, next) => {
  res.endo('One Love, two heart');
});

app.listen(3000);
