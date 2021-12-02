let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];


result = arrayOfNumbers(vector);

console.log(result);

function arrayOfNumbers(vector) {

  let evenNumbers = [];

  for (let index1 = 0; index1 < vector.length; index1 += 1) {
    for (let index2 = 0; index2 < vector[index1].length; index2 += 1) {
      if (vector[index1][index2] % 2 === 0) {
        evenNumbers.push(vector[index1][index2]);
      }

    }
  }

  return(evenNumbers);

}