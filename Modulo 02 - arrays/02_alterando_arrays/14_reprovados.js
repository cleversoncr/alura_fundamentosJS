const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro', 'Jefferson'];
const notas = [7, 4.5, 8, 7.5, 3];

let reprovados = nomes.filter((aluno, indice) => notas[indice] < 5);

console.log(`Reprovados: ${reprovados}`)

