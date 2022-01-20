//tipo de dado
//booleano

//conversão implícita
const numero = 456;
const numeroString = '456';
const numeroStringA = '456a';

console.log(numero === numeroString); //compara valor e tipo
console.log(numero == numeroString); //compara valor

console.log(numero + numeroString); //concatena o resultado

//conversão explícita

//Number() ==>> é uma função
//String() ==>> é uma função

console.log(numero + Number(numeroString));
console.log(numero + Number(numeroStringA));