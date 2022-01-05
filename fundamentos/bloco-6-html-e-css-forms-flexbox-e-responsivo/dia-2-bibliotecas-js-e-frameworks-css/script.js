// Add option to the list of states

let allStates = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO']
];

const stateOptions = document.querySelector('#state-id');

console.log(allStates.length);

function addOption(states) {
  if (states.length === 0) {
    return 0;
  }
  let newOption = document.createElement('option');
  newOption.innerText = states[0][0];
  newOption.value = states[0][1];
  stateOptions.appendChild(newOption);
  states.shift();
  return addOption(states);
}

addOption(allStates);

// preventDefault to the form

const submitButton = document.querySelector('#submit-button-id');
submitButton.addEventListener('click', (event) => {
  //event.preventDefault();
});

/* // Date validation
submitButton.addEventListener('click', () => {
  let date = document.querySelector('#date-begin-id');
  let text = date.value;
  console.log(text);
  let pattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (text.length === 10) {
    if (!pattern.test(text)) {
      alert('Padrão de data incorreto')
    }
  }
});


// Limitation of number of character
function limitChar(element, maxnumber) {
  if (element.value.length > maxnumber - 1) {
    element.value = element.value.substring(0,maxnumber);
  }
}

// Validation for full name
let fullName = document.querySelector('#name-id');
fullName.pattern = "^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,5}$";
fullName.addEventListener('keyup', () => {
  limitChar(fullName, 40);
});

// Validation for cpf
let cpf = document.querySelector('#cpf-id');
cpf.pattern = "[0-9]{11}";
cpf.addEventListener('keyup', () => {
  limitChar(cpf, 11);
});

// Validation for city
let city = document.querySelector('#city-id');
city.pattern = "^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,5}$";
city.addEventListener('keyup', () => {
  limitChar(city, 28);
});

// Validation for adress
let adress = document.querySelector('#adress-id');
adress.addEventListener('keyup', ()=> {
  limitChar(adress, 500);
});

// Validation for date
let date = document.querySelector('#date-id');
date.pattern = "/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i";
date.addEventListener('keyup', ()=> {
  limitChar(date, 8);
}); */

document.getElementById('date-id').DatePickerX.init();