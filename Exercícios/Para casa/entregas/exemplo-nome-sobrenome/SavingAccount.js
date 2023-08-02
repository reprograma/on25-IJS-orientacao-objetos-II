const { BankAccount } = require("../projeto/BankAccount");

class SavingAccount extends BankAccount {
  incomeRate;
  incomeDay;
  #qtdWithdrawal;
  #withdrawalTax;
  MAX_OF_WITHDRAWAL = 2;

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
    this.#withdrawalTax = 0.5;
  }

  get qtdWithdrawal() {
    return this.#qtdWithdrawal;
  }

  get withdrawalTax() {
    return this.#withdrawalTax;
  }

  set withdrawalTax(newFee) {
    this.#withdrawalTax = newFee;
  }

  debitWithFee(amount) {
    let amountFee = amount + amount * this.#withdrawalTax;
    if (this.balance >= amountFee) {
      this.balance -= amountFee;
      console.log(
        `Operação realizada com sucesso. Saldo atual: $${this.balance}`
      );
      return true;
    } else {
      console.log(
        `Erro! Você não tem R$ ${amountFee} (valor do saque + taxa) na sua conta. Saldo atual: $${this.balance}`
      );
      return false;
    }
  }

  cashWithdrawal(amount) {
    if (this.#qtdWithdrawal >= this.MAX_OF_WITHDRAWAL) {
      console.log(
        `Você ultrapassou o limite de saques diários gratuitos em Caixas Eletrônicos 24h, portanto será cobrada uma taxa de ${
          this.#withdrawalTax
        }% por saque no dia de hoje`
      );

      if (this.debitWithFee(amount) == true) {
        this.#qtdWithdrawal += 1;
        console.log(
          `Limite de retiradas gratuitas em Caixas Eletrônicos 24h: ${
            this.MAX_OF_WITHDRAWAL
          } - Você já fez ${this.#qtdWithdrawal} retirada(s) hoje.`
        );
        return true;
      } else {
        return false;
      }
    }

    if (this.balance < amount) {
      console.log(
        `não há saldo suficiente na sua conta para sacar R$ ${amount}. Saldo atual: RS ${this.balance}`
      );
    } else {
      this.debitAmount(amount);
      this.#qtdWithdrawal += 1;
      console.log(
        `Limite de retiradas gratuitas em Caixas Eletrônicos 24h: ${
          this.MAX_OF_WITHDRAWAL
        } - Você já fez ${this.#qtdWithdrawal} retirada(s) gratuita(s) hoje.`
      );
    }
  }

  generateIncome(currentDay) {
    if (currentDay == parseInt(this.incomeDay)) {
      this.balance += this.balance * this.incomeRate;
      console.log(
        `Hoje é dia de rendimento! Saldo atual com o rendimento: R$ ${this.balance}`
      );
    } else {
      console.log(
        `Não é dia de rendimento hoje, seu rendimento dos investimentos é todo dia ${this.incomeDay}. Saldo atual: R$ ${this.balance}`
      );
    }
  }
}

module.exports = { SavingAccount };
