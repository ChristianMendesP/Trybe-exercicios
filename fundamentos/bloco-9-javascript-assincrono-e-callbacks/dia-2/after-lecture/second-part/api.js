const list = document.querySelector('#list-coins'); const list10 = document.querySelector('#first-ten');

function myCriptoFunction() {
  fetch(`https://api.coincap.io/v2/assets`)
    .then(response => response.json())
    .then(obj => {
      console.log(obj.data);
      obj.data.forEach((elem) => {
        const item = document.createElement('li');
        const num = Number(elem.priceUsd);
        item.innerText = `${elem.name} (${elem.symbol}): ${num.toFixed(2)}`;
        list.appendChild(item);
      });

      const first10 = obj.data.filter((elem) => elem.rank <= 10);
      first10.forEach((elem) => {
        const item = document.createElement('li');
        const num = Number(elem.priceUsd);
        item.innerText = `${elem.name} (${elem.symbol}): ${num.toFixed(2)}`;
        list10.appendChild(item);
      })

    });
}

window.onload = () => myCriptoFunction();