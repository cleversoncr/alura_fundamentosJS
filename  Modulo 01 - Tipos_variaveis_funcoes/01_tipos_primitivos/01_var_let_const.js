//var


/*
No momendo da execução do código, o motor do JS faz a leiturae encontra todas as variáveis
e aquelas que não foram declaradas, ele cataloga como VAR.
*/

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento; 
// console.log(area);
// var area;

//let

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo') {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// };

// console.log(area);

//const

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'retangulo') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
};

console.log(area);

/*
 * var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas
  em relação à lógica da aplicação.
 * let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos,
 */

