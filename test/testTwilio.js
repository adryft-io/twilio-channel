var expect = require('chai').expect;

var twilio = require('../server/twilio.js');
var testData = { Body: '{"message":"\'this is a test\'","phone":"\'+13109537849\'"}' }

describe('twilio', function() {
  it('should be a function', function(){
    expect(twilio).to.be.a('function');
  });
});
