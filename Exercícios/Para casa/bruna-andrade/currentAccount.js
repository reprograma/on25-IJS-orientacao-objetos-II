const { BankAccount } = require('../projeto/BankAccount');

class currentAccount extends BankAccount {
  constructor(accountHolder, balance) {
    super(accountHolder, balance);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log('Conta válida!');
      return;
    }

    if (this.balance >= amount) {
      this.balance -= amount;
      anotherAccount.balance += amount;

      console.log(`Transferência realizada com sucesso!`);
      console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
    } else {
      console.log(`Saldo insuficiente para transferir. Seu saldo atual é de R$ ${this.balance}.`);
    }
  }
}

export default { currentAccount };
