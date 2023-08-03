const { BankAccount } = require("./BankAccount");

class SavingAccount extends BankAccount {
  incomeRate;
  incomeDay;
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2;
  withdrawalTax = 0.03;

  cashWithdrawal(amount) {
    console.log(`Você já realizou ${this.#qtdWithdrawal}.`);
    if (this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      if (this.balance >= amount) {
        this.balance -= amount;
        this.#qtdWithdrawal++;
        console.log(
          `Retirada realizada com sucesso. Seu saldo restamte é R$ ${this.balance},00`
        );
      } else {
        console.log(`Você não tem saldo suficiente para essa operação.`);
      }
    } else {
      const amountWithTax = amount + amount * this.whithdrawalTax;
      if (this.balance >= amountWithTax) {
        this.balance -= amountWithTax;
        this.#qtdWithdrawal++;
        console.log(
          `Retirada realizada com sucesso. Seu saldo restante pé de R$ ${this.balance},00`
        );
      } else {
        console.log(`Você não tem saldo suficente para esta operação`);
      }
    }
  }

  constructor(
    client,
    bank,
    accountNumber,
    agencyNumber,
    incomeRate,
    incomeDay
  ) {
    super(client, bank, accountNumber, agencyNumber);
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;
    this.#qtdWithdrawal = 0;
  }

  generateIncome(currentDay) {
    if (currentDay === this.incomeDay) {
      let income = this.balance * this.incomeRate;
      this.balance += income;
      console.log(`O novo saldo após rendimento é: R$ ${this.balance}`);
    }
  }

  get qtdWithdrawal() {
    return this.#qtdWithdrawal;
  }

  MAX_OF_WITHDRAWAL() {}

  withdrawalTax() {}
}

module.exports = { SavingAccount };
