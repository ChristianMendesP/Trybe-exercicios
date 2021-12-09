
let page = document.querySelector('main');

// Changing backgroundColor
let bgColor = document.querySelector('#idBgColor');
bgColor.addEventListener('input', function (event) {
  page.style.backgroundColor = event.target.value;
})

// Changing textColor
let textColor = document.querySelector('#idTextColor');
textColor.addEventListener('input', function (event) {
  page.style.color = event.target.value;
})

// Changing size font
let sizeText = document.querySelector('#idSizeText');
sizeText.addEventListener('input', function (event) {
  page.style.fontSize = `${event.target.value}px`;
})

// Changing space between lines
let textHeight = document.querySelector('#idHeight');
textHeight.addEventListener('input', function (event) {
  page.style.lineHeight = `${event.target.value}px`;
})

// Changing font type
// Adding the items for clicking
let fontsArray = ['times', 'helvetica', 'Smooch', 'Fuzzy Bubbles', 'monospace'];
for (let each of fontsArray) {
  let fontItem = document.createElement('li');
  fontItem.className = each;
  fontItem.innerText = each;
  fontItem.style.fontFamily = each;
  let list = document.querySelector('#fontsList');
  list.appendChild(fontItem);
}

// setting boldo for selected font
let fontItems = document.querySelectorAll('li');
fontItems[0].style.fontWeight = 'bold';

for (let i = 0; i < fontItems.length; i += 1) {

  fontItems[i].addEventListener('click', function (event) {

    page.style.fontFamily = event.target.innerText;

    if (event.target.style.fontWeight !== 'bold'){
      resetLi()
      event.target.style.fontWeight = 'bold';
    }
  })
}

// reseting textWeight before set bold
function resetLi() {
  let itemsList = document.querySelectorAll('li');
  for (i = 0; i < itemsList.length; i += 1) {
    itemsList[i].style.fontWeight = 'normal';
  }
}
