let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(let eachNumber of numbers) {
  sum = sum + eachNumber;
}
mean = sum / numbers.length;
console.log(mean);