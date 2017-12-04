
const socket = io();

// event listener
socket.on('bot reply', botReply => {
  addMessage('bot', botReply);
});

function chat() {
  const userInput = document.getElementById('user-message').value;
  addMessage('you', userInput);
  socket.emit('chat message', userInput);
}

function addMessage(from, text) {
  let el = document.createElement('li');
  el.innerHTML = `${from}: ${text}`;
  el.setAttribute('class', from);
  document.querySelector('ul').append(el);
}