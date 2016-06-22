var dotenv = require('dotenv').config
var expect = require('chai').expect;

describe('dotenv', function() {
  it('should set TWILIO_ACCOUNT_SID', function(){
    expect(process.env.TWILIO_ACCOUNT_SID).to.be.a('string');
  });
  it('should set TWILIO_AUTH_TOKEN', function(){
    expect(process.env.TWILIO_AUTH_TOKEN).to.be.a('string');
  });
});
