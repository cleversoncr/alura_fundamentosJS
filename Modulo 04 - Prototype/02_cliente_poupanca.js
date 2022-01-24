function cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function (valor) {
    this.saldo += valor
  }
};

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  cliente.call(this, nome, cpf, email, saldo)
  this.saldoPoup = saldoPoup
};

const ju = new ClientePoupanca('Ju', '54213698745', 'ju@gmail.com', 3290, 2000);

console.log(ju);

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor
};

ju.depositarPoup(325);

console.log(ju.saldoPoup);