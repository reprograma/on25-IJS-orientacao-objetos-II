class Account {
    #id;
    name;
    balance;
  
    constructor(id, name, balance) {
      this.#id = id;
      this.#name = name;
      this.#balance = balance;
    }
  
    credit(amount) {
      this.#balance += amount;
      console.log(`O saldo após o crédito é de R$ ${this.balance}`);
    }
  
    debit(amount) {
        if(amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`O saldo após o débito é de R$ ${this.balance}`);
        } else {
            console.log('Amount exceeded balance')
            return this.#balance
        }
    }
  
    transferTo(anotherAccount, amount) {
      if (!(anotherAccount instanceof Account)) {
        throw 'ERRO: Informe uma conta válida.';
      }
  
      if (this.#balance <= amount) {
        throw 'ERRO: Você não possui saldo suficiente para realizar essa operação.';
      }

      if(amount <= this.#balance) {
      this.debit(amount);
      anotherAccount.credit(amount);
      }
  
      console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
      console.log(
        `O saldo atual da conta de destino é de R$ ${anotherAccount.#balance}`
      );
    }

    get ID() {
        return this.#id
    }

    get Name() {
        return this.#name
    }

    get Balance() {
        return this.#balance
    }



  }