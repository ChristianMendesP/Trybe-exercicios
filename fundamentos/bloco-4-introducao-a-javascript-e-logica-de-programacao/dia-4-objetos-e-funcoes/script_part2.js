let word = "trybe";
let ending = "be";

let result = verificaFimPalavra(word, ending);

console.log(result);


function verificaFimPalavra(word, ending) {

let counter = 0;

for (let index = 0; index < ending.length; index += 1) {
  if (word[word.length-1-index] === ending[ending.length-1-index] ) {
    counter += 1;
  }
}
if (counter === ending.length) {
  return(true);
} else {
  return(false);
}

}



/* let number = 5;

console.log(sumUntil(number));

function sumUntil(number) {
  let sum = 0;
  for (let n = 1; n<= number; n += 1) {
    sum += n;
  }
  return(sum);
} */



/* let arrayNumbers = [2, 3, 2, 5, 8, 2, 3];

function mostRepeated(arrayNumbers) {

  let compare;
  let counter = [];
  let howMany = 0;
  for (index1 = 0; index1 < arrayNumbers.length; index1 += 1) {
    compare = arrayNumbers[index1];
    for (index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index1] === arrayNumbers[index2]) {
        howMany += 1;
      }
    }
    counter.push(howMany);
    howMany = 0;
  }

  let indexOfMostRepeated = theGreatest(counter);

  let result = arrayNumbers[indexOfMostRepeated];

  return (result);

}
function theGreatest(array) {
  let indexGreatest = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > array[indexGreatest]) {
      indexGreatest = index;
    }
  }
  return (indexGreatest);
} */


/* let arrayNumbers = [2, 3, 6, 7, 10, 1];

let result = theSmallest(arrayNumbers);

console.log( result );

function theSmallest(array) {
  let indexSmallest = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < array[indexSmallest]) {
      indexSmallest = index;
    }
  }
  return(indexSmallest);
} */


/* let arrayNumbers = [2, 3, 6, 7, 10, 1];

let result = theGreatest(arrayNumbers);

console.log( result );

function theGreatest(array) {
  let indexGreatest = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > array[indexGreatest]) {
      indexGreatest = index;
    }
  }
  return(indexGreatest);
} */


/* let word = "carro";

let result = verificaPalindrome(word);

console.log(result);

function verificaPalindrome(word) {
  let array = [];
  let isPalindrom = true;
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] != word[word.length - index - 1]) {
      isPalindrom = false;
      break;
    }
  }
  return(isPalindrom);
} */