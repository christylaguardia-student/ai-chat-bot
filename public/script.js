'use strict';

const socket = io();
const userMessage = document.querySelector('#user-message');
const botMessage = document.querySelector('#bot-message');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;

////////// event listeners //////////

document.querySelector('button').addEventListener('click', () => recognition.start());

recognition.addEventListener('speechstart', () => console.log('speech detected'));

recognition.addEventListener('result', e => {
  console.log('result detected');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  userMessage.textContent = text;

  console.log('confidence', e.results[0][0].confidence);

  socket.emit('chat message', text);
})

recognition.addEventListener('speechend', () => recognition.stop());

recognition.addEventListener('error', e => botMessage.textContent = `Error: ${e.error}`);




// TODO: add constructor function for adding messages to the page


////////// speech setup //////////

function synthVoice(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();

  utterance.text = text;

  synth.speak(utterance);
}

// set the bot message
socket.on('bot reply', replyText => {
  synthVoice(replyText);
  if (replyText == '') replyText = '(no answer...)';
  botMessage.textContent = replyText;
});
