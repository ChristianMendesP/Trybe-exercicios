const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!';
  }
  const allObj = [];
  array = array.sort();
  array.forEach(element => {
    let obj = {};
    obj['tech'] = element;
    obj['name'] = name;
    allObj.push(obj);
  });
  return allObj;
};

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;