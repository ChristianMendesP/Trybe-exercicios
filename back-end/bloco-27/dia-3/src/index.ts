// ./src/index.ts

type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type School = {
  name: string;
  approvalGrade: number;
};

type Student = {
  name: string;
  disciplines: Discipline[];
  school: School; // Agora não é mais uma string
};

/* "Converter" */
const getGradeLetter = (grade: number): string => {
  const gradeLimits = [0.9, 0.8, 0.7, 0.6, 0.1, 0];
  const letterGradeLimits = ['A', 'B', 'C', 'D', 'E', 'F'];

  const convertAlgorithm = (gradeNumber: number, index: number): string => (
    gradeNumber >= gradeLimits[index]
      ? letterGradeLimits[index]
      : convertAlgorithm(gradeNumber, index + 1)
  );

  return convertAlgorithm(grade, 0);
};

/* Coletar notas */
const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});
  
/* "Converter" */
const percentageGradesIntoLetters = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades),
});

/* "Determinar" */
const approvedStudents = ({ disciplines, school }: Student): boolean =>
  disciplines.every(({ grade }) => grade >= school.approvalGrade);

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/* Abaixo temos um exemplo de execução */
const studentsExample = [
  {
    name: 'Lee',
    school: { name: 'Standard', approvalGrade: 0.7 },
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: { name: 'Hogwarts', approvalGrade: 0.8 },
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

setApproved(studentsExample);

/*
  Não se esqueça que é necessário exportar ao final as funções para que você
  possa testá-las
*/
export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};