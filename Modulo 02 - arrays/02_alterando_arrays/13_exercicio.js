const numeros = [2, 3, 4, 6, 7, 10];

function multiplica(x) {
  return x * 10;
};

const multiplicacao = numeros.map(multiplica);

console.log(multiplicacao);