let word = "carro";

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
}