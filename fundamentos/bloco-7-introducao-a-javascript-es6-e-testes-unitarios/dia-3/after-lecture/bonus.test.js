// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (idt, detail) => {
  // Implemente seu código aqui
  let ids = [];
  let value = 'Informação indisponível';
  for (let unit of professionalBoard) {
    if (unit.id === idt) {
      ids.push(unit.id);
      if (unit[detail] !== undefined) {
        value = unit[detail];
      }
    }
  }
  if (ids.length === 0) {
    value = 'ID não identificada';
  }
  return value;
};

console.log(searchEmployee('8579-6','specialities'));

describe('Function searchEmployee', () => {
  it('exists', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('returns "Doods", when entries are "4678-2" and "lastNAme"', () => {
    expect(searchEmployee('4678-2','lastName')).toBe('Dodds');
  });
  it("returns '['UX', 'Design']', when entries are '8579-6' and 'specialities'", () => {
    expect(searchEmployee('8579-6','specialities')).toEqual(['UX', 'Design']);
  });
  it("returns 'ID não identificada', when entries are '000' and 'specialities'", () => {
    expect(searchEmployee('000','specialities')).toBe('ID não identificada');
  });
  it("returns 'Informação indisponível', when entries are '8579-6' and 'whatever'", () => {
    expect(searchEmployee('8579-6','whatever')).toBe('Informação indisponível');
  });
});