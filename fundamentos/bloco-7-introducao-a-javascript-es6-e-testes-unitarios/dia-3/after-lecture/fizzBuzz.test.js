function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
console.log(myFizzBuzz(15));


describe('Function fizzbuzz', ()=>{
  it('returns "fizzbuzz" if the number is multiple of 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('returns "fizz" if the number is multiple of 3 and not of 5', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('returns "buzz" if the number is multiple of 5 and not of 3', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('returns the self number if it is not multiple of 5 or 3', () => {
    expect(myFizzBuzz(32)).toBe(32);
  });

  it('returns "false" if the parameter is not a number', () => {
    expect(myFizzBuzz('32')).toBe(false);
  });
});
