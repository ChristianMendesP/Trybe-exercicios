function hydrate(string) {
  let r = /\d/g; // Inspired on https://codereview.stackexchange.com/a/115887
  let howManyDrinks = string.match(r).map(Number);
  let sum = 0;
  let result = '';
  for (let index = 0; index < howManyDrinks.length; index += 1) {
    sum += howManyDrinks[index];
  }

  if (sum === 1) {
    result = `${sum} copo de água`;
  } else {
    result = `${sum} copos de água`;
  }
  return result;
}

// console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));

module.exports = hydrate;