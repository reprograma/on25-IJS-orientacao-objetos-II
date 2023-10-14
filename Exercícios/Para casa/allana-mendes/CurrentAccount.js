const { BankAccount } = require("./BankAccount");

class CurrentAccount extends BankAccount {
  transferTo(destinationAccount, amount) {
    if (!(destinationAccount instanceof BankAccount)) {
      console.log("Conta inválida. Verifique as informações e tente novamente");
      return;
    }

    let amountToBeDebited = amount;

    if (this.balance >= amountToBeDebited) {
      this.balance -= amountToBeDebited;
      destinationAccount.balance += amount;

      console.log(
        `Transferência realizada com sucesso! Saldo atual: R$ ${this.balance}`
      );
    } else {
      console.log(
        `Você não tem saldo suficiente para realizar essa operação. Saldo atual da conta: R$ ${this.balance}`
      );
    }
  }
}

module.exports = { CurrentAccount };
