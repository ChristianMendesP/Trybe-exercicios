let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lesser = numbers[0];

for (let counter=1;counter<numbers.length;counter+=1) {
  if (numbers[counter] < lesser) {
    lesser =  numbers[counter];
  }
}
console.log("Lesser: ",lesser);
