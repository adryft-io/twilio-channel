var awsconfig = require('../aws.credentials.json')
var expect = require('chai').expect;

describe('awsconfig', function() {
  it('should set accessKeyId', function(){
    expect(awsconfig.accessKeyId).to.be.a('string');
  });
  it('should set secretAccessKey', function(){
    expect(awsconfig.secretAccessKey).to.be.a('string');
  });
  it('should set region', function(){
    expect(awsconfig.region).to.be.a('string');
  });
});
