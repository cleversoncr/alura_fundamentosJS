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

const cleverson = new Cliente('Cleverso Rocha', 'cleversoncr@gmail.com', '254.879.666-54', 3000);

cleverson.exibirSaldo()

console.log(cleverson);

//Em Classes, não precisamos utilizar a palavra 'function'