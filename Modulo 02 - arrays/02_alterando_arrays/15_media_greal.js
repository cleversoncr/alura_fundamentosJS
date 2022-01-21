// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function mediaSala(notasDaSala) {
//   const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
//   return somaDasNotas / notasDaSala.length;

// };

// console.log(`Média da sala de JS: ${mediaSala(salaJS)}`);
// console.log(`Média da sala de Java: ${mediaSala(salaJava)}`);
// console.log(`Média da sala de Python: ${mediaSala(salaPython)}`);


// const notas = [10, 6.5, 8, 7.5];
// const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

// console.log(`A média das notas do aluno é: ${media}`);

//As tres funões abaixo traz o mesmo resultado, mudando apenas a forma de se escrever
const numeros = [43, 50, 65, 12]

//forma 1 arrow function
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
//Segunda forma
const soma = numeros.reduce(function (acum, atual) {
  return atual + acum
}, 0)
//Forma mais comum
function operacaoNumerica(acum, atual) {
  return atual + acum
 }
 
 const soma = numeros.reduce(operacaoNumerica, 0)

 console.log(soma) //170