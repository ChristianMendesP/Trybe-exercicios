// Desafio 9  // changed for lint
function encode(string) {
  let result = string.replace(/a/, '1');
  result = result.replace(/e/, '2');
  result = result.replace(/i/, '3');
  result = result.replace(/o/, '4');
  result = result.replace(/u/, '5');
  return result;
}

function decode(string) {
  let result = string.replace(/1/, 'a');
  result = result.replace(/2/, 'e');
  result = result.replace(/3/, 'i');
  result = result.replace(/4/, 'o');
  result = result.replace(/5/, 'u');
  return result;
}

const isFunction = (func) => typeof (func) === 'function';
const numberChar = string => string.length;

describe('Function encode', () => {
  it('is a function', () => {
    expect(isFunction(encode)).toBe(true);
  });
  it('converts "a" into "1"', () => {
    expect(encode('a')).toBe('1');
  });
  it('converts "e" into "2"', () => {
    expect(encode('e')).toBe('2');
  });
  it('converts "i" into "3"', () => {
    expect(encode('i')).toBe('3');
  });
  it('converts "o" into "4"', () => {
    expect(encode('o')).toBe('4');
  });
  it('converts "u" into "5"', () => {
    expect(encode('u')).toBe('5');
  });
  it('doesnt convert "c"', () => {
    expect(encode('c')).toBe('c');
  });
  it('doesnt convert "z"', () => {
    expect(encode('z')).toBe('z');
  });
  it('doesnt convert "s"', () => {
    expect(encode('s')).toBe('s');
  });
  it('checks if the length doesnt change', () => {
    expect(numberChar(encode('christian'))).toBe(numberChar('christian'));
  });
});

describe('Function decode', () => {
  it('is a function', () => {
    expect(isFunction(decode)).toBe(true);
  });
  it('converts "1" into "a"', () => {
    expect(decode('1')).toBe('a');
  });
  it('converts "2" into "e"', () => {
    expect(decode('2')).toBe('e');
  });
  it('converts "3" into "i"', () => {
    expect(decode('3')).toBe('i');
  });
  it('converts "4" into "o"', () => {
    expect(decode('4')).toBe('o');
  });
  test('converts "5" into "u"', () => {
    expect(decode('5')).toBe('u');
  });
  it('doesnt convert "6"', () => {
    expect(decode('6')).toBe('6');
  });
  it('doesnt convert "90"', () => {
    expect(decode('90')).toBe('90');
  });
  it('doesnt convert "-987"', () => {
    expect(decode('-987')).toBe('-987');
  });
  it('checks if the length doesnt change', () => {
    expect(numberChar(encode('chr3st31n'))).toBe(numberChar('chr3st31n'));
  });
});


