function cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function (valor) {
    this.saldo += valor
  }
};

const cleverson = new cliente('Cleverson', '25896433325', 'cleversoncr@gmail.com', 235);

console.log(cleverson);