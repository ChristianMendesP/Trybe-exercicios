let number = 14;
let counterDivisors = 0;
let result = false;

for (let index = 1; index <= number; index+=1) {
  if (number % index === 0) {
    counterDivisors+=1;
  }
}

if (counterDivisors === 2) {
  result = true;
}
console.log(result);