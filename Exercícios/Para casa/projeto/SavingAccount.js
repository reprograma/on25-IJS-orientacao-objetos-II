const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2;
  #withdrawalTax = 0.03;
  incomeRate;
  incomeDay;

  constructor(incomeRate, incomeDay){
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;

  }

  cashWithdrawal(amount) {
    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)

    if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      if(this.balance >= amount) {
        this.balance -= amount;        
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
        return;
      }
    } else {
      const amountWithTax = amount + (amount * this.#withdrawalTax);
      if(this.balance >= amountWithTax) {
        this.balance -= amountWithTax;        
      } else {
        console.log(`Você não tem saldo suficiente para essa operação;`);
        return;
      }

      this.#qtdWithdrawal++;
      console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
    }

    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
  }

  generateIncome(currentDay){
    if(currentDay === this.incomeDay){
      this.balance += 100.00;
    }
  }
}