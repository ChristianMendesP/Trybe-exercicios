const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const sum = (acum, element) => acum + element;

const mean = (list) => list.reduce(sum,0) / list.length;

function studentAverage(acum, element, index) {
  let grade = mean(grades[index]);
  const newObj = {name: element, average: grade};
  acum.push(newObj);
  return acum;
}

const result = students.reduce(studentAverage, []);

console.log(result);

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];