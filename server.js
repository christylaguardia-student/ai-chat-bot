const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const dialogflow = require('./lib/dialogflow.api');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', socket => {
  console.log('user connected!');

  socket.on('chat message', userMsg => {
    dialogflow
      .getBotReply(userMsg)
      .then(botReply => socket.emit('bot reply', botReply));
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(PORT, () => {
  console.log('server listening on port:', http.address().port);
});