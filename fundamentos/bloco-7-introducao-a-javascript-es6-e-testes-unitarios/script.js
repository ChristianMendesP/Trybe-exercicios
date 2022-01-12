// Part 1

//1 
/* const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);
 */
//2

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const newSort = array => {
  const newArray = array.sort( (a,b) => a-b);
  return `Os números ${newArray} se encontram ordenados de forma crescente`;
}

console.log(newSort(oddsAndEvens)); // será necessário alterar essa linha 😉 */

// Part 2

// 1

/* const factorial = intNumber => intNumber === 0 ? 1 : intNumber * factorial(intNumber - 1);
console.log(factorial(4)); */

// 2
/* const longestWord = frase => {
  const array = frase.split(' ');
  const sortedArray = array.sort( (a,b) => b.length - a.length);
  return sortedArray[0];
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); */

// 4
const join = (string, param) => {
  let newString = '';
  for (let i=0; i<string.length; i+=1) {
    if (string[i] === 'x') {
      newString = `${newString}${param}`;
    } else {
      newString = `${newString}${string[i]}`;
    }
  }
  return newString;
};
const greeting = join('Tryber x aqui!', 'Bebeto');
// console.log(greeting);

const powers = ['html', 'css', 'js', 'git', 'logical thinking'];

const message = (greetings, habilities) => {
  const newPowers = powers.sort();
  return `${greetings} Minhas cinco principais habilidades são: ${newPowers}`;
}

console.log(message(greeting, powers));