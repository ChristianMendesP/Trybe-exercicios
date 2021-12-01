let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Nao'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Nao'
};

for (let index in info) {
  if (index != 'recorrente') {
    console.log(info[index] + ' e ' + info2[index]);
  } else {
    if (info[index] === info2[index] && info2[index] === 'Sim') {
      console.log('Ambos recorrentes');
    } else if (info[index] === info2[index] && info2[index] === 'Nao'){
      console.log('Ambos nao recorrentes');
    } else {
      console.log(info[index] + ' e ' + info2[index]);
    }
  }
};