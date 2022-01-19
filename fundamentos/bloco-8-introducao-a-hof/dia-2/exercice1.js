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
      birthYear: 1921,
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

// Adicione o código do exercício aqui:
// Adicione o código do exercício aqui:
function authorBornIn1947(list) {
  return list.find((eachOne) => eachOne.author.birthYear === 1947).author.name;
}

// console.log(authorBornIn1947(books));

// 
function smallerName(list) {
  let nameBook = list[0].name;
  list.forEach(element => {
    if (element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  });
  return nameBook;
}

// console.log(smallerName(books));

// 
function getNamedBook(list) {
  return list.find((element) => element.name.length === 26);
}

// console.log(getNamedBook(books));

// 

function booksOrderedByReleaseYearDesc(books) {
  // escreva aqui seu código
  books.sort((a, b) => a.releaseYear - b.releaseYear);
  return books;
}

// console.log(booksOrderedByReleaseYearDesc(books));

// 
const expectedResult = false;

function everyoneWasBornOnSecXX(list) {
  // escreva seu código aqui
  let result = list.every((element) => {
    let year = element.author.birthYear;
    return year > 1900 && year < 2001;
  });

  return result;
}

// console.log(everyoneWasBornOnSecXX(books));

// 

function someBookWasReleaseOnThe80s(list) {
  return list.some((element) => {
    let year = element.releaseYear;
    return year > 1980 && year < 1991;
  })
}

// console.log(someBookWasReleaseOnThe80s(books));

//
function authorUnique(list) {
  if (list.length === 0) {
    return true;
  }
  let element = list.shift();
  let thereIs = list.some((newElement) => element.author.birthYear === newElement.author.birthYear);
  if (thereIs) {
    return false;
  }
  return authorUnique(list);
};
console.log(authorUnique(books));