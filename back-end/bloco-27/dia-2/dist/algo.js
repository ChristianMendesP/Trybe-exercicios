"use strict";
class Animal {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    get age() {
        /*Para operar com datas, vamos operar somente com milissegundos. Uma data
        é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
        const timeDiff = Math.abs(Date.now() -
            new Date(this.birthDate).getTime());
        /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
        Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}
class Mammal extends Animal {
    walk() {
        console.log(`${this.name} está andando!`);
    }
}
const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
const main = (animal) => {
    console.log(animal.age);
};
class Bird extends Animal {
    fly() {
        console.log(`${this.name} está voando!`);
    }
}
const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));
console.log(parrot.age);
parrot.fly();
/*
Saída (código executado em Mar/2022):

Papagaio está voando!
*/
// main(tiger);
// tiger.walk();
/*
Saída (código rodado em Mar/2022):

Tigre está andando!
*/ 
