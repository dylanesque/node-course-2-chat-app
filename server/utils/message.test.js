var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});

  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    // Test for returning the correct latitude and longtude objects.
    var from = 'Mike';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var locMessage = generateLocationMessage(from, latitude, longitude);

    expect(locMessage.createdAt).toBeA('number');
    expect(locMessage).toInclude({from, url});
  })
});