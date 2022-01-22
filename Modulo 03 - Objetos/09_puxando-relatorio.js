const cliente = {
  nome: 'Cleverson',
  idade: 43,
  cpf: '12548756254',
  email: 'cleversoncr@gmail.com',
  telefone: ['34353837', '985425514'],
  dependentes: [
    {
      nome: 'Jhonny',
      parentesco: 'sobrinho',
      anoNasc: '2003'
    },
    {
      nome: 'Jhonathan',
      parentesco: 'sobrinho',
      anoNasc: '2006'
    }
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor
  },

};

let relatorio = '';

for (let info in cliente) {
  if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
    continue
  } else {
    relatorio += `
    ${info} - ${cliente[info]}
    `
  }
};

console.log(relatorio)
