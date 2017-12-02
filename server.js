const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const chat = require('./lib/chat');

app.use(express.static('./public'));

app.get('/', (req, res) => res.sendFile('index.html'));

const server = app.listen(PORT, () => {
  console.log('server listening on port:', server.address().port);
});

chat(server);