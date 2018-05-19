const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var wrong = isRealString(34);

    expect(wrong).toBe(false);
  });

  it('should reject strings with only empty spaces', () => {
    var wrong = isRealString('   ');

    expect(wrong).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var wrong = isRealString('  Michael ');

    expect(wrong).toBe(true);
  });
});

//import isRealString

//isRealString

//should reject non-string values

// should reject string with only spaces

// should allow string with non-space characters