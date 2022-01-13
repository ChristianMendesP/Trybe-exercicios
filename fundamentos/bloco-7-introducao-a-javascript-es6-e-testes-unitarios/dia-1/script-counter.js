const button = document.querySelector('#button');
const clicks = document.querySelector('#many-clicks');
let counter = 0;
button.addEventListener('click', () => {
  counter += 1;
  clicks.innerText = counter;
});