(function (module) {

  const index = {};

  index.socket = io();
  
  index.initChat = () => {
    index.socket.on('bot reply', botReply => {
      index.addMessage('bot', botReply);
    });
  };

  index.setStyles = () => {
    document.querySelector('body').style.overflowX = 'scroll';
    document.querySelector('body').style.overflowY = 'hidden';
  };

  index.setEventListeners = () => {
    document.getElementById('user-input').addEventListener('keyup', e => {
      e.preventDefault();
      if (e.keyCode === 13) index.chat();
    });
  };

  index.chat = () => {
    const userInput = document.getElementById('user-input');
    
    if (userInput.value) {
      index.addMessage('you', userInput.value);
      index.socket.emit('chat message', userInput.value);
      userInput.value = '';
    }
  };

  index.addMessage = (from, text) => {
    const messages = document.getElementById('messages');
    let el = document.createElement('p');
    const color = from === 'bot' ? 'is-link' : 'is-primary';

    el.innerHTML = text;
    el.className = `notification ${color}`;
    el.style.textAlign = from === 'bot' ? 'left' : 'right';
    messages.prepend(el);
    messages.scrollTop = 0;
  };

  document.addEventListener('DOMContentLoaded', () => {
    index.initChat();
    index.setStyles();
    index.setEventListeners();
  });

  module.index = index;
})(window);
