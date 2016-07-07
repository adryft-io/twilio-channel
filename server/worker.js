require('dotenv').config({silent: true});
var AWS = require('aws-sdk')
AWS.config.update({ region: process.env.AWS_REGION });
var Consumer = require('sqs-consumer');
var twilio = require('./twilio.js');

var sqs = new AWS.SQS();

sqs.getQueueUrl({ QueueName: 'twilio-channel' }, (err, data) => {
  if (err) return console.log(err);
  var app = Consumer.create({
    queueUrl: data.QueueUrl,
    handleMessage: (data, done) => {
      twilio(data);
      done();
    },
    sqs: sqs
  });
  app.on('error', (err) => {
    console.log(err.message);
    return err.message
  })
  app.start();
  module.exports = app;
})
