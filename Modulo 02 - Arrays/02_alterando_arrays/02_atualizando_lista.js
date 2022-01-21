// Método SPLICE

const listaDeChamada = [
  'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'
];

console.log(`Lista de chamada: ${listaDeChamada}`);

/*
 O primeiro parâmetro é o indice, nesse caso o 1 (incluso), indica onde vamos iniciar a remoção.
 O segundo parâmetro indica quando elementos serão removidos.
 Se o segundo parâmetro for 0, significa que nenhum elemento será removido e, no caso do exemplo,
 será adicionado mais um elemento após o indice definido.
*/

listaDeChamada.splice(1, 2, 'Rodrigo');

console.log(`Lista de chamada: ${listaDeChamada}`);

