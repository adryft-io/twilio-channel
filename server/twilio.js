  require('dotenv').config({silent: true});
  var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  module.exports = function(data) {
    var body = JSON.parse(data.Body);
    var phone = body.reaction_fields.phone;
    var text = body.action_props.body || ''
    var message = body.reaction_fields.message + '. ' + text
    console.log('message: ', message, 'phone: ', phone);
    client.messages.create({
      to: phone,
      from: process.env.TWILIO_NUMBER,
      body: message
    }, function(err, message){
        return err ? console.log('twilio', err) : console.log(message.sid)
      }
    );
  }
