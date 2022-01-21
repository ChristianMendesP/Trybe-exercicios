const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const bigArray = names.reduce((acum, element) => acum.concat(element.toLocaleLowerCase().split('')), []);

const containsA = (acum, element) => ((element === 'a') ? acum + 1 : acum);

const result = bigArray.reduce(containsA, 0);

console.log(result);