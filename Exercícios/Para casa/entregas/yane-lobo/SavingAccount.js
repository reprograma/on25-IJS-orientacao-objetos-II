const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
    #qtdWithdrawal = 0
    #MAX_OF_WITHDRAWAL = 2
    #withdrawalTax = 0.03
    incomeRate
    incomeDay

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay){
        super(client, bank, accountNumber, agencyNumber)
        this.incomeRate = incomeRate
        this.incomeDay = incomeDay
    }

    cashWithdrawal(amount){
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. 
        Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas`)


        const withdrawalsQtd = `Você já realizou ${this.#qtdWithdrawal} retiradas.`
        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL && this.balance >= amount) {
            this.balance -= amount
            this.#qtdWithdrawal++
            console.log(withdrawalsQtd)
        } else if((!(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL)) && this.balance >= amount){
            const amountWithTax = amount + (amount * this.#withdrawalTax)
            console.log(withdrawalsQtd)
            this.balance -= amountWithTax
            this.#qtdWithdrawal++
        } else {
            console.log('Você não tem saldo suficiente.');
            return;
        }
    }

    generateIncome(currentDay) {
        if(currentDay === this.incomeDay) {
            this.balance += (this.balance * this.incomeRate)
            console.log(`Seu novo saldo após rendimentos é de R$ ${this.balance}`)
        } else {
            console.log('Hoje não é dia de rendimento :(')
        }
    }
}

module.exports = { SavingAccount };