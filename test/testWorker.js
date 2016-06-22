var expect = require('chai').expect;
var worker = require('../server/worker.js');

describe('worker', function() {
  it('shold have a defined queue url', function(){
    expect(worker.queueUrl).to.be.a('string');
  });
  it('should have a handleMessage function', function(){
    expect(worker.handleMessage).to.be.a('function');
  });
  it('should have accessKeyId defined', function(){
    expect(worker.sqs.config.credentials.accessKeyId).to.be.a('string');
  });
});
