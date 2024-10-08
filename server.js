const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.'));
});

app.listen(3000, () => {
  console.log('Server berjalan pada http://localhost:8000');
});
