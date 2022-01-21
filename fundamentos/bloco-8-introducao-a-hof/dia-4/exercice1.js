const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (acum, element) => acum.concat(element);

const result = arrays.reduce(flatten, []);

console.log(result);