function apresentar(nome) {
  return `Meu nome é ${nome}`;
};

//Arrow function

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (x, y) => x + y;

//Arrow function com + de 1 linha de instrução precisaa de {}

const somaNumerosPequenos = (x, y) => {
  if (x > 10 || y > 10) {
    return 'Somente números de 1 à 9'
  } else {
    return x + y;
  }
};

console.log(apresentarArrow('Cleverson'));
console.log(soma(1, 2));
console.log(somaNumerosPequenos(9, 9));