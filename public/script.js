
const socket = io();

// event listeners
socket.on('bot reply', botReply => {
  addMessage('bot', botReply);
});

document.getElementById('messages').style.overflowY = 'scroll';

document.getElementById('user-input').addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode === 13) chat();
});

function chat() {
  const userInput = document.getElementById('user-input');
  
  if (userInput.value) {
    addMessage('you', userInput.value);
    socket.emit('chat message', userInput.value);
    userInput.value = '';
  }
}

function addMessage(from, text) {
  const messages = document.getElementById('messages');
  let el1 = document.createElement('p');
  let el2 = document.createElement('span');
  const color = from === 'bot' ? 'is-link' : 'is-primary';

  el2.innerHTML = text;
  el2.className = `tag ${color} is-medium is-rounded`;
  el1.style.display = 'block';
  el1.style.textAlign = from === 'bot' ? 'left' : 'right';
  el1.append(el2);
  
  messages.prepend(el1);
  messages.scrollTop = 0;
}
