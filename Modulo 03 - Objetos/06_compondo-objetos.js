const cliente = {
  nome: 'Cleverson',
  idade: 43,
  cpf: '12548756254',
  email: 'cleversoncr@gmail.com',
  telefone: [
    '34353837',
    '985425514'
  ]

};

cliente.dependentes = {
  nome: 'Jhonny',
  parentesco: 'sobrinho',
  anoNasc: '2014'
}

console.log(cliente);

cliente.dependentes.anoNasc = '2013'

console.log(cliente);


const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
 }
 
 // cria um novo objeto utilizando o original como base
 const objPersonagem2 = Object.create(objPersonagem)
 objPersonagem2.nome = "Gandalf, o Cinzento"
 
 console.log(objPersonagem.nome) //Gandalf
 console.log(objPersonagem2.nome) //Gandalf, o Cinzento