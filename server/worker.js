const Consumer = require('sqs-consumer');
const AWS = require('aws-sdk');
const twilio = require('./twilio.js');
AWS.config.loadFromPath('./aws.credentials.json');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/971458161724/twilio-channel',
  handleMessage: function(data, done){
    twilio(data);
    done();
  },
  sqs: new AWS.SQS()
});
app.on('error', function(err){
  console.log(err.message);
  return err.message
})
app.start();

module.exports = app;
