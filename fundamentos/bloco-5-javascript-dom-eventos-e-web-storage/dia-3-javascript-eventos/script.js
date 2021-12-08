function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercice 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];

let father = document.querySelector('#days');
let element = [];

for (let i = 0; i < dezDaysList.length; i += 1) {
  element[i] = document.createElement('li');
  element[i].className = 'day';
  element[i].innerText = dezDaysList[i];

  if (holidays.includes(dezDaysList[i])) {
    element[i].classList.add('holiday');
  }

  if (fridays.includes(dezDaysList[i])) {
    element[i].classList.add('friday');
  }

  father.appendChild(element[i]);
}

// Exercice 2
let string = 'Feriados';

let buttonHolidays = document.createElement('button');
let fatherB = document.querySelector('.buttons-container');
buttonHolidays.innerText = string;
buttonHolidays.id = 'btn-holiday';
fatherB.appendChild(buttonHolidays);

console.log(document.querySelector('#btn-holiday'));

// Exercice 3
buttonHolidays.addEventListener('click', function () {
  let holyDays = document.querySelectorAll('.holiday');

  for (let i = 0; i < holyDays.length; i += 1) {

    if (holyDays[i].style.backgroundColor === 'yellow') {
      holyDays[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holyDays[i].style.backgroundColor = 'yellow';
    }
  }
});

// Exercice 4
let stringFriday = 'Sexta-feira';
let buttonFriday = document.createElement('button');
buttonFriday.innerText = stringFriday;
buttonFriday.id = 'btn-friday';
fatherB.appendChild(buttonFriday);

// Exercice 5
const buttonFridayOriginal = document.querySelectorAll('.friday');

buttonFriday.addEventListener('click', function () {

  let buttonFriday = document.querySelectorAll('.friday');

  for (let i = 0; i < buttonFriday.length; i += 1) {

    if (!buttonFriday[i].innerText.includes('(Sexta-feira)')) {
      buttonFriday[i].innerText = `${buttonFriday[i].innerText} (Sexta-feira)`;
    } else {
      buttonFriday[i].innerText = parseInt(buttonFridayOriginal[i].innerText);
    }
  }
});

// Exercice 6
let normalFont = element[0].style.fontSize;

for (let i = 0; i < dezDaysList.length; i += 1) {
  let dayZoom = element[i];

  dayZoom.addEventListener('mouseover', function () {
    dayZoom.style.fontSize = '2em';
  })

  dayZoom.addEventListener('mouseout', function () {
    dayZoom.style.fontSize = normalFont;
  })
}

// Exercice 7
let stringTask = 'cozinhar';
let task = document.createElement('span');
task.innerText = stringTask;
let fatherSpan = document.querySelector('.my-tasks');
fatherSpan.appendChild(task);

// Exercice 8
let blockColor = document.createElement('div');
blockColor.className = 'task';
father = document.querySelector('.my-tasks');

function addLegend(colorTask) {
  blockColor.style.backgroundColor = colorTask;
  father.appendChild(blockColor);
}

let taskColor = 'red';
addLegend(taskColor);

// Exercice 9
let originalClass = blockColor.className;
blockColor.addEventListener('click', function () {
  if (blockColor.className === originalClass) {
    blockColor.className = 'task selected';
  }
  else {
    blockColor.className = originalClass;
  }
});

// Exercice 10
for (let i = 0; i < dezDaysList.length; i += 1) {

  let dayTask = element[i];
  originalColor = dayTask.style.color; // = 'rgb(119,119,119)';

  dayTask.addEventListener('click', function (event) {

    if (blockColor.className === 'task selected') {
      let colorTask = document.querySelector('.selected').style.backgroundColor;

      if (event.target.style.color === colorTask) {
        event.target.style.color = originalColor;
      } else {
      event.target.style.color = colorTask;
      }
    }
  })
}

