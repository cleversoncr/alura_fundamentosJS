// let x = '';
// console.log(x);
// x = 'oi';

// DECLARAÇÃO DE FUNÇÃO

/**
  1 - declara a funão
  2 - executa a função (1 ou + vezes) 
 */

function imprimeTexto(texto) {
  console.log(texto)
};

imprimeTexto('Oi');
imprimeTexto('Cleverson');
imprimeTexto(12 + 4);
imprimeTexto('texto' === 2);
imprimeTexto(soma());

function soma() {
  //outros códigos
  //vários console.log()
  return 2 + 2;
  //o que estiver após o retorno não é executado
}

// console.log(soma());