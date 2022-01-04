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

const submitButton = document.querySelector('#submit-button-id');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});