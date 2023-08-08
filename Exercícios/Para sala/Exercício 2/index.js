class Account {
  #id;
  #name;
  #balance = 0;

  constructor(id, name, balance) {
    this.#id = id;
    this.#name = name;
    this.#balance = balance;
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get balance() {
    return this.#balance
  }

  credit(amount) {
    this.#balance += amount;
    console.log(`O saldo após o crédito é de R$ ${this.#balance}`);
  }

  debit(amount) {
    if(amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log(`Amount exceeded balance`);
    }
    return this.#balance
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      throw 'ERRO: Informe uma conta válida.';
    }

    if (this.#balance <= amount) {
      throw 'ERRO: Você não possui saldo suficiente para realizar essa operação.';
    }
    this.debit(amount);
    anotherAccount.credit(amount);

    console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
    console.log(
      `O saldo atual da conta de destino é de R$ ${anotherAccount.#balance}`
    );
  }

  toString() {
    return `id: ${this.#id}, name: ${this.#name}, balance: ${this.#balance}`
  }
}