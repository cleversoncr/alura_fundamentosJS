const cliente = {
  nome: 'Cleverson',
  idade: 43,
  cpf: '12548756254',
  email: 'cleversoncr@gmail.com',
  telefone: [
    '34353837',
    '985425514'
  ],
  dependentes: [
    {
      nome: 'Jhonny',
      parentesco: 'sobrinho',
      anoNasc: '2003'
    }
  ]

};

cliente.dependentes.push({ nome: 'Jhonathan', parentesco: 'sobrinho', anoNasc: '2006' })


console.log(cliente);

const maisNovo = cliente.dependentes.filter(dependente => dependente.anoNasc === '2003');

console.log(maisNovo[0].nome);