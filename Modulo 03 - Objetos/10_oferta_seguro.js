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

function oferSeguro(obj) {
  const propsClientes = Object.keys(obj);
  if (propsClientes.includes('dependentes')) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`)
  } else console.log('Cliente sem dependentes')
};

oferSeguro(cliente);