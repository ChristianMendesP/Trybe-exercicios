let arrayNumbers = [2, 3, 6, 7, 10, 1];

let result = theGreatest(arrayNumbers);

console.log( result );

function theGreatest(array) {
  let greatest = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > greatest) {
      greatest = array[index];
    }
  }
  return(greatest);
}



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