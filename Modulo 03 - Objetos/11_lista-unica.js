const clientes = [
  {
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
    ]
  },
  {
    nome: 'Matheus',
    idade: 53,
    cpf: '65214578954',
    email: 'matheus@gmail.com',
    telefone: ['63259875', '9998541274'],
    dependentes: [
      {
        nome: 'Miranda',
        parentesco: 'filha',
        anoNasc: '2003'
      },
      {
        nome: 'Fred',
        parentesco: 'filho',
        anoNasc: '2006'
      }
    ]
  }
];

// spread operator '...' é um operador de espalhamento
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes);
console.table(listaDependentes);