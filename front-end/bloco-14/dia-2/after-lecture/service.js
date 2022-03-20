import fetch from 'node-fetch'
globalThis.fetch = fetch

function randomNumberGenerator() {
  return 1;
  // return Math.floor(Math.random() * 101);
}

function upperCase(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string[0];
}

function concatStr(string1, string2) {
  return string1 + string2;
}

getDog = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

const result = getDog('https://dog.ceo/api/breeds/image/random');

// console.log(result);

// module.exports = { randomNumberGenerator, upperCase, firstLetter, concatStr };
