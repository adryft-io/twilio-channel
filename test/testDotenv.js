var dotenv = require('dotenv').config
var expect = require('chai').expect;

describe('dotenv', function() {
  it('should set ACCOUNT_SID', function(){
    expect(process.env.ACCOUNT_SID).to.be.a('string');
  });
  it('should set AUTH_TOKEN', function(){
    expect(process.env.AUTH_TOKEN).to.be.a('string');
  });
});
