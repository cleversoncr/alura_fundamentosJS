const alunos = ['João', 'Juliana', 'Caio', 'Ana',];
const mediasDosAlunos = [10, 7, 9, 6];
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
    //                            [0][3]                                         [1][3]
    return (`${listaDeNotasEAlunos[0][indice]}, sua média é ${listaDeNotasEAlunos[1][indice]}`);
  } else {
    return 'Aluno não está cadastrado'
  }
}

console.log(exibeNomeNota('Ana'));

/*
 Includes => sempre retorna true ou false
  Faz uma pesquisa para saber se o elemento existe.

 IndexOf => retorna o índice
  Faz uma busca pelo índice do elemento

*/