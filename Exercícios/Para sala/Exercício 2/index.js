class Account {
    #id;
    #name;
    #balance = 0;
  
    constructor(id, name, balance) {
      this.#id = id;
      this.#name = name;
      this.#balance = balance;
    }

    get id(){
        return this.#id
    }
    
    get name(){
        return this.#name
    }

    get balance(){
        return this.#balance
    }
  
    credit(amount) {
      this.#balance += amount;
      return this.#balance;
    }
  
    debit(amount) {
      if(amount <= this.#balance){
        this.#balance -= amount;
      } else {
        console.log("O valor do saque excedo o valor disponível na sua conta.")
      } 
      return this.#balance;
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
  
      return this.#balance;
    }

    toString(){
        const phrase = `Account[id = $${this.#id}, name = $${this.#name}, balance = $${this.#balance}]`;

        return phrase;
    }
}

const account1 = new Account(1, "Daphne", 3500);
account1.debit(200);
account1.credit(700);
console.log(account1.balance);
console.log(account1.toString());