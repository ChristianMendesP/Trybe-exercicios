const salarioBruto = 3000;

let aliquota;
let salarioBase;
let salarioLiquido;
let ir;


if (salarioBruto <= 1556.94) {
    aliquota = 8 / 100 * salarioBruto;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquota = 9 / 100 * salarioBruto;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquota = 11 / 100 * salarioBruto;
} else { //salarioBruto >= 5189.82
    aliquota = 570.88;
}

salarioBase = salarioBruto - aliquota;

if (salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
    ir = 7.5 / 100 * salarioBase - 142.8;
} else if (salarioBase > 2826.66 && salarioBase < 3751.05) {
    ir = 15 / 100 * salarioBase - 354.8;
} else if (salarioBase > 3751.06 && salarioBase <4664.68) {
    ir = 22.5 / 100 * salarioBase - 636.13;
} else {
    ir = 27.5 / 100 * salarioBase - 869,36;
}

salarioLiquido = salarioBase - ir;

console.log(salarioLiquido);