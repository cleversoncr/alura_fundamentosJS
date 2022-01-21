const cliente = {
  nome: 'Cleverson',
  idade: 43,
  cpf: '12548756254',
  email: 'cleversoncr@gmail.com'

};

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente['conta']);