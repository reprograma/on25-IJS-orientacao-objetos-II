const {BankAccount} = require ('../projeto/BankAccount');

class SavingAccount extends BankAccount{
    incomeRate;
    incomeDay;
    #qtdWithdrawal = 0; 
    #MAX_OF_WITHDRAWAL = 2;  // valor constante
    #withdrawalTax = 0.03;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber);
        this.incomeRate = incomeRate;
        this.incomeDay = incomeDay;
    }

    generateIncome(currentDay) {
        if (currentDay === this.incomeDay) {
            const income = this.balance * (this.incomeRate / 100);
            this.balance += income;

            console.log(`Rendimento gerado! O novo saldo é de R$ ${this.balance}`);
        } else {
            console.log(`Ainda não é o dia de rendimento.`);
        }
    }

    cashWithdrawal(amount) {
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)
    
        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
          if(this.balance >= amount) {
            this.balance -= amount;
            this.#qtdWithdrawal++;
            console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
          } else {
            console.log(`Você não tem saldo suficiente para essa operação;`);
          }
        } else {
          const amountWithTax = amount + (amount * this.#withdrawalTax);
          if(this.balance >= amountWithTax) {
            this.balance -= amountWithTax;
            this.#qtdWithdrawal++;
            console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
          } else {
            console.log(`Você não tem saldo suficiente para essa operação;`);
          }
        }
    
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
      }

    }

    
module.exports = { SavingAccount };
