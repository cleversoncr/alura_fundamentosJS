const nomes = [
  'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie',
  'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
  'Paulo', 'Bia', 'Viviana', 'Isabela', 'Vinícius',
  'Renan', 'Renata', 'Daisy', 'Camilo'
];

console.log('Tamanho da array:', nomes.length)
const sala1 = nomes.slice(0, nomes.length / 2); //Esse método é exclusivo, ou seja, não pega o ultimo valor.
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);