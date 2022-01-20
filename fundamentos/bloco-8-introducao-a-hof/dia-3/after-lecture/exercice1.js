const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function formatedBookNames(list) {
  // escreva seu código aqui
  return list.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}

// console.log(formatedBookNames(books));

function nameAndAge(list) {
  // escreva seu código aqui
  const newList = list.map((element) => ({age: element.releaseYear - element.author.birthYear, author: element.author.name}));
  return newList.sort((a, b) => a.age - b.age);
}

// console.log(nameAndAge(books));

function fantasyOrScienceFiction(list) {
  // escreva seu código aqui
  return list.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica')
}

// console.log(fantasyOrScienceFiction(books));

function oldBooksOrdered(list) {
  // escreva seu código aqui
  const over60 = list.filter((element) => 2021 - element.releaseYear > 60);
  return over60.sort((a, b) => a.releaseYear - b.releaseYear);
}

// console.log(oldBooksOrdered(books));

function fantasyOrScienceFictionAuthors(list) {
  // escreva seu código aqui
  const onlyFictionFantasy = fantasyOrScienceFiction(list);
  return onlyFictionFantasy.map((element) => element.author.name).sort();
}

// console.log(fantasyOrScienceFictionAuthors(books));


function oldBooks(list) {
  // escreva seu código aqui
  const newList = list.filter((element) => 2021 - element.releaseYear > 60);
  return newList.map((element) => element.name);
}

// console.log(oldBooks(books));

const nameWith3Dots = (string) => {
  return (string[1]=== '.' && string[4]=== '.' && string[7]=== '.' );
}


function authorWith3DotsOnName(list) {
  // escreva seu código aqui
  const newList = list.filter((element) => nameWith3Dots(element.author.name));
  return newList.map((element) => element.name);
}

console.log(authorWith3DotsOnName(books));
