let roman = "MCMXCIII";
let result = romanToDecimal(roman);

console.log(result);


function romanToDecimal(roman) {
  let sum = 0;
  for (let alg = 0; alg < roman.length; alg += 1) {

    actualNumber = romanToNumber(roman[alg]);
    nextNumber = romanToNumber(roman[alg + 1]);

    if (actualNumber < nextNumber) {
      sum = sum + nextNumber - actualNumber;
      alg += 1;
    } else {
      sum = sum + actualNumber;
    }

  }
  return (sum);
}

function romanToNumber(romanAlgarism) {
  switch (romanAlgarism) {
    case "I":
      number = 1;
      break;
    case "V":
      number = 5;
      break;
    case "X":
      number = 10;
      break;
    case "C":
      number = 100;
      break;
    case "M":
      number = 1000;
      break;
    default:
      flag = 0;
      break;
  }
  return number;
}