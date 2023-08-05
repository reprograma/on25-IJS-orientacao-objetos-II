const { BankAccount } = require('./BankAccount');
// ### SavingAccount
// Deve herdar a classe `BankAccount`.
// Deve possuir os seguintes atributos a mais:
// - [ ] `incomeRate`, taxa de rendimento, recebido na instanciação
// - [ ] `incomeDay`, dia de rendimento, recebido na instanciação

// Por fim, a classe `SavingAccount` deve possuir o seguinte método:
// - [ ] `generateIncome(currentDay)`, que recebe como o atributo o dia atual e, caso o dia atual seja igual ao dia de rendimento (`incomeDay`), deve atualizar o saldo, somando o valor rendido. Retorne o novo saldo na console.
class SavingAccount extends BankAccount { 
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2;
  #withdrawalTax = 0.03;
  constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
    super(client, bank, accountNumber, agencyNumber);
    this.incomeRate = incomeRate;
    this.incomeDay = incomeDay;
  }

  cashWithdrawal(amount) {
    const remainingFreeWithdrawals = this.#MAX_OF_WITHDRAWAL - this.#qtdWithdrawal;
    if (remainingFreeWithdrawals <= 0) {
        console.log('Você já realizou todas as retiradas gratuitas.');
    } else {
        console.log(`Você ainda possui ${remainingFreeWithdrawals} retiradas gratuitas.`);
    }
    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. As primeiras ${this.#MAX_OF_WITHDRAWAL} são gratuitas.`);

    if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      if(this.balance >= amount) {
        this.balance -= amount;
        this.#qtdWithdrawal++; 
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
      } else { 
        console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance},00.`);
      }
    } else {
      const amountWithTax = amount + (amount * this.#withdrawalTax);
      if(this.balance >= amountWithTax) {
        this.balance -= amountWithTax;
        this.#qtdWithdrawal++;
        console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
      } else {
        console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance},00.`);
      }
    }

    console.log(`Total de retiradas: ${this.#qtdWithdrawal}.`);
  }
  generateIncome(currentDay){
    if(currentDay === this.incomeDay) {
        this.balance += this.balance * this.incomeRate
        console.log(`Seu novo saldo após rendimentos é de R$ ${this.balance}.`)
    }
  }
}

module.exports = { SavingAccount };