const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/greeting', (req, res) => {
  res.send('hello donncha');
});

app.listen(PORT, () => {
  console.log(`test-node listening on port ${PORT}`);
});
