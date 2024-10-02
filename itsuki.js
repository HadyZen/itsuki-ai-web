const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('hadi.html'); 
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
