const cliente = {
  nome: 'Cleverson',
  idade: 43,
  cpf: '12548756254',
  email: 'cleversoncr@gmail.com'

};

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade}`);
console.log(cliente.cpf.substring(0, 3)) //Exibe apenas 3 caractéres da string [0] inicio / [3] fim. 