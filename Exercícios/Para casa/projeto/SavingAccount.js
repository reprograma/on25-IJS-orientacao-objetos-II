const { BankAccount } = require("./BankAccount");

class SavingAccount extends BankAccount {
  incomeRate;
  incomeDay;
  #qtdWithdrawal;

  constructor(
    client,
    bank,
    accountNumber,
    agencyNumber,
    incomeRate,
    incomeDay,
    qtdWithdrawal
  ) {
    super(client, bank, accountNumber, agencyNumber);
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;
    this.qtdWithdrawal = 0;
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
