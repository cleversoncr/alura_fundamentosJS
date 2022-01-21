const cliente = {
  nome: 'Cleverson',
  idade: 43,
  cpf: '12548756254',
  email: 'cleversoncr@gmail.com'

};

// console.log(cliente);

cliente.fone = '958421154';
cliente.fone = '542154465';

console.log(cliente);

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago"
  },
  status: "desaparecido"
}

console.log(objPersonagem);

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem);