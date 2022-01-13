const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (obj, key, val) => {
  obj[key] = val;
};

const allKeys = obj => {
  console.log(Object.keys(obj));
  return Object.keys(obj);
}


allKeys(lesson3);

const showSize = obj => {
  console.log(Object.keys(obj).length);
  return Object.keys(obj).length;
};

showSize(lesson3);

const showKeys = obj => {
  console.log(Object.values(obj));
  return Object.values(obj);
};

showKeys(lesson3);
// let allLessons = {};
// for (let i = 1; i<=3; i+=1) {
//   let newKey = `lesson${i}`;
//   allLessons = Object.assign(allLessons, lesson1);
// }

let allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log(allLessons);

const students = obj => {
  const lessons = Object.keys(obj);
  let sum = 0;
  for (let eachLesson of lessons) {
    sum = sum + obj[eachLesson].numeroEstudantes;
  }
  console.log(sum);
  return sum;
};

students(allLessons);

const getValueByNumber = (obj, index) => {
  return Object.values(obj)[index];
};
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => obj[key] === value;

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));