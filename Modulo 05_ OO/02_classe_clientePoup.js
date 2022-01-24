class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }

  depositar(valor) {
    this.saldo += valor
  };

  exibirSaldo() {
    console.log(this.saldo)
  }

};

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca
  }

  depsitarPoupanca(valor) {
    this.saldoPoupanca += valor
  }

};

const cleverson = new ClientePoupanca('Cleverson', 'cleversoncr@gmail.com', '542.624.999-45', 100, 200);

console.log(cleverson);

cleverson.depositar(50);
cleverson.depsitarPoupanca(25);

console.log(cleverson);