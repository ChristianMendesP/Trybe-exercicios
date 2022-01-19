let RIGHT_ANSWERS   = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
let STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

let points = 0;
const correctFunction = (rightAnswers,studentAnswers) => {
  if (rightAnswers.length === 0) {
    return points;
  }
  if (rightAnswers[0] === studentAnswers[0]) {
    points += 1;
  } else if (studentAnswers[0] !== 'N.A') {
    points -= 0.5;
  }
  rightAnswers.shift();
  studentAnswers.shift();
  return correctFunction(rightAnswers, studentAnswers);
};

const score = (rightAnswers, studentAnswers, correctFunction) => correctFunction(rightAnswers, studentAnswers);

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, correctFunction));

