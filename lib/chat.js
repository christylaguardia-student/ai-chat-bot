const socketIO = require('socket.io');
const request = require('superagent');
const API_TOKEN = process.env.DIALOGFLOW_CLIENT_ACCESS_TOKEN;


module.exports = http => {
  const io = socketIO(http);

  io.on('connection', socket => {
    socket.on('chat message', text => {
      request
        // TODO: generate the session id
        .get(`https://api.dialogflow.com/v1/query?v=20150910&contexts=shop&lang=en&query=${text}&sessionId=12345&timezone=America/New_York`)
        .set('Authorization', `Bearer ${API_TOKEN}`)
        .then(res => {
          console.log('res.body', res.body);
          return res.body;
        })
        .catch(err => console.log(err));
    });
  });
};