

function soma(a, b) {
  return a + b

};

console.log(soma(2, 2));
console.log(soma(23, 32));
console.log(soma(-500, 300));
console.log(soma('2', 3)); //concatenação


function nomeIdade(nome, idade) {
  return `O meu nome é ${nome} e tenho ${idade}`

}

console.log(nomeIdade(43, 'Cleverson'));

function multiplica(x = 1, y = 1) {
  return x * y

};

console.log(multiplica(soma(4, 5), soma(3, 3)));
console.log(multiplica(soma(4, 5)));

/* 
  Função SEM retorno e SEM parâmetro ==>> executa uma instrução, sem a necessidade de
  disponibilizar o resultado para o restante do código. 
*/

function cumprimentar() {
  console.log('oi gente!')
}

cumprimentar()

/* 
  Função SEM retorno e COM parâmetro ==>> recebe, via parâmetro, o dado a ser apresentado.
*/

function cumprimentaPessoa(pessoa) {
  console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Cleverson')

/* 
  Função COM retorno e SEM parâmetro ==>> executa uma instrução, sem a necessidade de
  disponibilizar o resultado para o restante do código. 
*/

function cumprimentar() {
  return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Cleverson') // “Oi gente! Meu nome é Cleverson”

/* 
 Função COM retunr e COM parâmetro ==>> as funções podem receber a quantidade de parâmetros necessária,
 e que o JavaScript identifica os parâmetros pela ordem!
*/

function operacaoMatematica(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3
}

operacaoMatematica(15, 30, 45) // 90

//Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado;