const notas = [10, 9, 8, 7, 6];

/*
 forEach -> executa o que está dentro do bloco. Não retorna dados.
 map -> retorna um novo array atualizado que será armazenado em uma variável.
 
 Ao realizar uma operação com incremento, precisa ficar atento com o seguinte:
 nota++ => nota = nota + 1 => O incrementeo é realizado após a leitura.
 ++nota => Primeiro incremente e depois dá saida.

*/

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);