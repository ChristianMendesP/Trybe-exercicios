/* const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum(2, '3')); */

/* const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const addProp = (object, key, value) => {
  object[key] = value;
  return object;
};


console.log(addProp(customer, 'lastName', 'Ferreira')); */

/* const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const text = (habilities) => {
  const habArray = Object.keys(habilities);
  const levelArray = Object.values(habilities);
  for (let i=0; i<habArray.length; i+=1) {
    console.log(`${habArray[i]}, Nível: ${levelArray[i]}`);
  }
}

text(student1) */

/* const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow)); */

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);