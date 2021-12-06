const const1 = 10;
const const2 = 31;
const const3 = 30;
let result;

if (const1 >= const2 && const1 >=const3) {
    result = const1;
} else if (const2 >= const1 && const2 >= const3) {
    result = const2;
} else if (const3 >= const1 && const3 >= const1) {
    result = const3;
}
console.log(result);