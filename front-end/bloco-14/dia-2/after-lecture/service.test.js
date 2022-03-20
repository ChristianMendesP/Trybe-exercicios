const service = require('./service');
// jest.mock('./service');

describe('The function "randomNumberGenerator"', () => {
  it('returns 10, then back to original', () => {
    const mockRandomNumberGenerator = jest.spyOn(service, "randomNumberGenerator").mockReturnValue(10);
    mockRandomNumberGenerator();
    expect(mockRandomNumberGenerator).toHaveBeenCalledTimes(1);
    expect(mockRandomNumberGenerator()).toBe(10);
    mockRandomNumberGenerator.mockRestore();
  })

  it('does division between two numbers, then back to original', () => {
    // modified
    const mockRandomNumberGenerator = jest.spyOn(service, 'randomNumberGenerator').mockImplementation((a, b) => a / b);
    const value = mockRandomNumberGenerator(2, 4);
    expect(mockRandomNumberGenerator).toHaveBeenCalledTimes(1);
    expect(value).toBe(0.5);
    mockRandomNumberGenerator.mockRestore();
  })


  it('does product between three numbers and then returns 2 times a number', () => {
    let mockRandomNumberGenerator = jest
      .spyOn(service, "randomNumberGenerator")
      .mockImplementation((a, b, c) => a * b * c);
    const value = mockRandomNumberGenerator(2, 1, 3);
    expect(value).toBe(6);


    mockRandomNumberGenerator.mockRestore();
    mockRandomNumberGenerator = jest
      .spyOn(service, "randomNumberGenerator")
      .mockImplementation((a) => a * 2);
    const newValue = mockRandomNumberGenerator(2);
    expect(newValue).toBe(4);
  })
})

describe('The function "upperCase"', () => {
  it('turns all upper case letters into lower case, and then vice-versa', () => {
    let mockUpperCase = jest.spyOn(service, "upperCase").mockImplementation((string) => string.toLowerCase());
    const value = mockUpperCase('OLA');
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(value).toBe('ola');

    // mockUpperCase.mockRestore();
    mockUpperCase.mockRestore();
    const newValue = service.upperCase('ola');
    expect(newValue).toBe('OLA');
    mockUpperCase.mockRestore();
  })
})

describe('The function "firstLetter"', () => {
  it('returns the first letter of a string and then the last one', () => {
    let mockFirstLetter = jest.spyOn(service, "firstLetter");
    const newValue = mockFirstLetter('oba');
    expect(newValue).toBe('o');

    mockFirstLetter.mockRestore();
    mockFirstLetter = jest.spyOn(service, "firstLetter").mockImplementation((string) => string[string.length - 1]);
    const value = mockFirstLetter('oba');
    expect(value).toBe('a');
    mockFirstLetter.mockRestore();
  })
})

// describe('The function "concatStr"', () => {
//   it('returns the last letter of a string', () => {
//     concatStr = jest.fn().mockImplementation((a, b, c) => a + b + c);
//     const value = concatStr('ola', 'tudo', 'bem');
//     expect(value).toBe('olatudobem');
//   })
// })