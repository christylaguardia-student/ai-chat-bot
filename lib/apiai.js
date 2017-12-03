require('dotenv').config();
const request = require('superagent');
const token = process.env.CLIENT_ACCESS_TOKEN;
const baseUrl = 'https://api.dialogflow.com/v1/';
const protocolVersion = '20150910';
const sessionId = '12345';

module.exports = {

  getBotReply(text) { 
    return request
      // TODO: generate the session id
      .get(`${baseUrl}query?v=${protocolVersion}&sessionId=${sessionId}&lang=en&query=${text}`)
      .set('Authorization', `Bearer ${token}`)
      .then(res => {
        const { speech } = res.body.result.fulfillment;
        console.log('you:', text);
        console.log('bot:', speech);
        // res.send(speech);
        return speech;
        // return io.emit('chat message', speech);
      })
      .catch(err => console.log(err.status, 'error', err));
  }
};