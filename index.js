const express = require('express');
const path = require('node:path');
const app = express();
const PORT = process.env.PORT || 8090;

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res) => {
  res.status(404).send('Halaman Tidak Di Temukan');
});

app.listen(PORT, () => {
  console.log('sistem berjalan di port:', PORT);
});
