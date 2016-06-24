var AWS = require('aws-sdk');
var expect = require('chai').expect;

describe('awsconfig', function() {
  it('should set accessKeyId', function(){
    expect(AWS.config.credentials.accessKeyId).to.be.a('string');
  });
  it('should set secretAccessKey', function(){
    expect(AWS.config.credentials.secretAccessKey).to.be.a('string');
  });
  it('should set region', function(){
    expect(AWS.config.region).to.be.a('string');
  });
});
