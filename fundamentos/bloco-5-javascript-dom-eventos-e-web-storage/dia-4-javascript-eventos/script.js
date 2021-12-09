let page = document.querySelector('main');

// Changing backgroundColor
let bgColor = document.querySelector('#idBgColor');

page.style.backgroundColor = localStorage.getItem("storagedBgColor");
if (localStorage.getItem("storagedBgColor") !== null) {
  bgColor.value = localStorage.getItem("storagedBgColor");
}

bgColor.addEventListener('input', function defineBg(event) {
  page.style.backgroundColor = event.target.value;
  localStorage.setItem("storagedBgColor", event.target.value);
})

// Changing textColor
let textColor = document.querySelector('#idTextColor');

page.style.color = localStorage.getItem("storagedTextColor");

if (localStorage.getItem("storagedTextColor") !== null) {
  textColor.value = localStorage.getItem("storagedTextColor");
}

textColor.addEventListener('input', function (event) {
  page.style.color = event.target.value;
  localStorage.setItem("storagedTextColor", event.target.value);
})

// Changing size font
let sizeText = document.querySelector('#idSizeText');

page.style.fontSize = localStorage.getItem("storagedSizeText");

if (localStorage.getItem("storagedSizeText") !== null) {
  sizeText.value = parseInt(localStorage.getItem("storagedSizeText"));
}

sizeText.addEventListener('input', function (event) {
  page.style.fontSize = `${event.target.value}px`;
  localStorage.setItem("storagedSizeText", `${event.target.value}px`);
})

// Changing space between lines
let textHeight = document.querySelector('#idHeight');

page.style.lineHeight = localStorage.getItem("storagedTextHeight");

if (localStorage.getItem("storagedTextHeight") !== null) {
  textHeight.value = parseInt(localStorage.getItem("storagedTextHeight"));
}

textHeight.addEventListener('input', function (event) {
  page.style.lineHeight = `${event.target.value}px`;
  localStorage.setItem("storagedTextHeight", `${event.target.value}px`);
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

// setting bold for selected font
let fontItems = document.querySelectorAll('li');

fontItems[0].style.fontWeight = 'bold';

page.style.fontFamily = localStorage.getItem('storagedBold');

if (localStorage.getItem('storagedBold') !== null) {
  page.style.fontFamily = localStorage.getItem('storagedBold');
  for (let i = 0; i < fontItems.length; i += 1) {
    if (fontItems[i].innerText === localStorage.getItem('storagedBold')) {
      fontItems[i].style.fontWeight = 'bold';
    } else {
      fontItems[i].style.fontWeight = 'normal';
    }
  }
}

for (let i = 0; i < fontItems.length; i += 1) {

  fontItems[i].addEventListener('click', function (event) {

    page.style.fontFamily = event.target.innerText;

    if (event.target.style.fontWeight !== 'bold'){
      resetLi()
      event.target.style.fontWeight = 'bold';
    }
    localStorage.setItem("storagedBold", event.target.innerText);
  })
}

// reseting textWeight before set bold
function resetLi() {
  let itemsList = document.querySelectorAll('li');
  for (i = 0; i < itemsList.length; i += 1) {
    itemsList[i].style.fontWeight = 'normal';
  }
}
