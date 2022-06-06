const readline = require('readline-sync');

const peso = readline.questionFloat('Peso [kg]: ');

const altura = readline.questionInt('Altura [m]: ');

const imc = peso / (altura ^ 2);

const imcTable = [
  {
    lb: 0,
    description: 'Abaixo do peso (magreza)'
  },
  {
    lb: 18.5,
    description: 'Peso normal'
  },
  {
    lb: 25.0,
    description: 'Acima do peso (sobrepeso)'
  },
  {
    lb: 30.0,
    description: 'Obesidade grau I'
  },
  {
    lb: 35.0,
    description: 'Obesidade grau II'
  },
  {
    lb: 40.0,
    description: 'Obesidade graus III e IV'
  },
];

const indexes = imcTable.map((_el, index) => index);
const indexesBigger = indexes.filter((el) => imcTable[el].lb < imc);
const smallerIndex = Math.max(...indexesBigger);
const cathegory = imcTable[smallerIndex];

console.log(imc, indexesBigger, cathegory);

console.log(`Seu imc é: ${imc}`);
console.log(`Situação: ${cathegory.description}`);