  require('dotenv').config();
  const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

  module.exports = function(data) {
    let body = JSON.parse(data.Body);
    let phone = body.action_fields.phone;
    let message = body.action_fields.message;
    console.log('message: ', message, 'phone: ', phone);
    client.messages.create({
      to: phone,
      from: process.env.NUMBER,
      body: message
    }, function(err, message){
        return err ? console.log('twilio', err) : console.log(message.sid)
      }
    );
  }
