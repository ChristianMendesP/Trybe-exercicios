const sum = (...numbers) => {
  return numbers.reduce( (acum, element) => acum + element, 0);
}


console.log(sum(1,4,2,65,3,0));