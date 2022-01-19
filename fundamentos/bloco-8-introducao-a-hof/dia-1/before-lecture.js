const wakeUp = () => 'Acordando!!';
const breakfest = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir';

const doingThings = (func) => func();

console.log(doingThings(sleep));