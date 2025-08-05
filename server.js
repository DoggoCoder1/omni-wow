const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const PASSWORD = 'DfE2';

app.post('/server', (req, res) => {
  const { password } = req.body;
  if (password === PASSWORD) {
    res.json({ success: true, message: 'Password correct!' });
  } else {
    res.json({ success: false, message: 'Incorrect password.' });
  }
});

app.post('/close', (req, res) => {
    res.json({ success: true, message: 'Password correct!' });
    console.log("E");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
