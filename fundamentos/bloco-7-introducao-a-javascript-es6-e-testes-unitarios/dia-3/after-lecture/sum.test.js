const {sum, exists} = require('./sum.js');

describe('Funtion sum', () => {

  it('exists', ()=> {
    expect(exists(sum)).toBe(true);
  });

  it('afirms that 5 + 9 = 14', () => {
    expect(sum(5,4)).toBe(9);
  });

  it('afirms that 0 + 0 = 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('doesnt work with string parameter', () => {
    expect(() => {
      sum(4,'5')
    }).toThrow();
  });
});