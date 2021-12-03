let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greater = numbers[0];

for (let counter=1;counter<numbers.length;counter+=1) {
  if (numbers[counter] > greater) {
    greater = numbers[counter];
  }

}

console.log(greater);
