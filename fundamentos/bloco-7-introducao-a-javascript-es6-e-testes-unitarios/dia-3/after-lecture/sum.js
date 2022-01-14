const { typeOf } = require("react-is");

const exists = (func) => typeOf(func)===undefined ? true : false;

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = {exists, sum};