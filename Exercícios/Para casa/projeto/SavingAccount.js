const { BankAccount } = require("./BankAccount");

class SavingAccount extends BankAccount {
  incomeRate;
  incomeDay;
  #qntWithdrawal = 0;
  MAX_OF_WITHDRAWAL = 2;
  #withdrawalTax = 0.03;

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
  }
  get qtdWithdrawal() {
    return this.#qntWithdrawal;
  }
  get withdrawalTax() {
    return this.#withdrawalTax;
  }
  set withdrawalTax(newWithdrawalTax) {
    this.#withdrawalTax = newWithdrawalTax;
  }

  cashWithdrawal(amount) {
    if (this.balance >= amount) {
      console.log(
        `Você já fez: ${
          this.#qntWithdrawal
        } retiradas. As primeiras 2 retiradas são gratuitas.`
      );
      console.log(this.calculateWithdrawal(amount));
    } else {
      console.log(
        `Seu saldo é de: R$ ${this.balance}, insuficiente para a operação. Operação cancelada!`
      );
    }
  }

  calculateWithdrawal(amount) {
    let result = "";
    if (this.MAX_OF_WITHDRAWAL > this.#qntWithdrawal) {
      this.balance -= amount;
      this.#qntWithdrawal++;
      result = `Operação realizada! Seu saldo agora é de: R$ ${
        this.balance
      }. Agora você fez: ${
        this.#qntWithdrawal
      } retiradas. Apenas duas são gratuitas.`;
    } else {
      let amountWithTax = amount + amount * this.#withdrawalTax;
      this.balance -= amountWithTax;
      this.#qntWithdrawal++;
      result = `Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de ${
        this.#withdrawalTax
      }. Retirada realizada. O saldo atual da conta é de ${
        this.balance
      }. Total de retiradas: ${this.#qntWithdrawal}`;
    }
    return result;
  }

  generateIncome(currentDay) {
    if (currentDay === this.incomeDay || currentDay > this.incomeDay) {
      const incomeBalance = this.balance * this.incomeRate;
      this.balance += incomeBalance;
      console.log(`Seu novo saldo após rendimentos é de: R$ ${this.balance}`);
    } else {
      console.log(
        `Seu dia de rendimento é apendas dia ${this.incomeDay}, volte novamente mais tarde.`
      );
    }
  }
}

module.exports = { SavingAccount };
