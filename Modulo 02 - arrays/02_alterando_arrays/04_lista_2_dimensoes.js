//                0         1         2      3
const alunos = ['João', 'Juliana', 'Caio', 'Ana',];

//                       0   1  2  3
const mediasDosAlunos = [10, 7, 9, 6];

//                           0            1
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

/*
 Para acesso em duas dimensões, primeiro criamos uma nova variável com outra liesta.
 No console.log, chamamos a variável que recebeu as duas listas e passamos dois indices,
 o primeiro [], determina qual lista será acessada e o segundo [],
 qual a posição dentro dessa lista.
*/

const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayOriginal)
console.log(arrayConcat)