const { BankAccount } = require("./BankAccount");

class CurrentAccount extends BankAccount {
  #balance;

  transferTo(anotherAccount, amount) {
    super.transferTo(anotherAccount, amount);
    if (!(anotherAccount instanceof BankAccount)) {
      console.log("Informe uma conta válida!");
      return;
    }

    if (this.#balance >= amount) {
      this.#balance -= amount;
      anotherAccount.balance += amount;

      console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
      console.log(
        `O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
      );
    } else {
      console.log(
        `Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${this.balance}. Para realizar essa transferência você precisa ter ${amount} em conta.`
      );
    }
  }
}
module.exports = { CurrentAccount };
