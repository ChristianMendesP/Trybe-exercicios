// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banana', 'maca', 'pera'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['chocolate', 'leite condensado', 'acucar'];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));





// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const together = (user, jobInfos) => {
//   return {...user, ...jobInfos};
// }

// console.log(together(user, jobInfos));



// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const together = (user, jobInfos) => {
//   const {name, age, nationality, profession, squad, squadInitials} = {...user, ...jobInfos};

//   return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

// }

// console.log(together(user, jobInfos));




// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// const [primeiro, segundo] = saudacoes;

// segundo(primeiro); // Olá



// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [animal, bebida, comida] = [comida, animal, bebida];

// console.log(comida, animal, bebida); // arroz gato água



// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// numerosPares = [numerosPares[3], numerosPares[4], numerosPares[5], numerosPares[6]]


// console.log(numerosPares); // [6, 8, 10, 12];






// const getNationality = ({ firstName, nationality = 'Brasilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));






// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude});

// console.log(getPosition(-19.8157, -43.9542));






const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));