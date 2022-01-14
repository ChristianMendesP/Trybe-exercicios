function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
describe('Function myRemove', () => {
  it('Verifies if 3 is removed when myRemove([1, 2, 3, 4],3)', () => {
    expect(myRemove([1, 2, 3, 4],3)).toEqual([1, 2, 4]);
  });

  it('Verifies if myRemove([1, 2, 3, 4],3) doesnt return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4],3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifies if myRemove([1, 2, 3, 4],5) returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4],5)).toEqual([1, 2, 3, 4]);
  });
});