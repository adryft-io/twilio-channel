var Consumer = require('sqs-consumer');
var AWS = require('aws-sdk');
var twilio = require('./twilio.js');
require('dotenv').config({silent: true});
AWS.config.update({
  region: process.env.AWS_REGION
});

var app = Consumer.create({
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
