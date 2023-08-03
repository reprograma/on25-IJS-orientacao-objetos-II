const { BankAccount } = require("./BankAccount");

class SavingAccount extends BankAccount {
    incomeRate;
    incomeDay;
    #qtdWithdrawal = 0;
    MAX_OF_WITHDRAWAL = 2;
    #withdrawalTax = 0.03

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay){
        super(client, bank, accountNumber, agencyNumber)
        this.incomeRate  = incomeRate
        this.incomeDay = incomeDay
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal
    }

    get withdrawalTax() {
        return this.#withdrawalTax
    }

    set withdrawalTax(newWithdrawalTax) {
        this.#withdrawalTax = newWithdrawalTax
    }

    cashWithdrawal(amount){
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.MAX_OF_WITHDRAWAL} retiradas gratuitas.`)

        if(this.#qtdWithdrawal < this.MAX_OF_WITHDRAWAL) {
            if(this.balance >= amount){
                this.balance -= amount
                this.#qtdWithdrawal++
                console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00.`)
            } else {
                console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance},00.`)
            }
        } else {
            const amounWithTax = amount + (amount * this.#withdrawalTax)
            if(this.balance >= amounWithTax) {
                this.balance -= amounWithTax
                this.#qtdWithdrawal++
                console.log(`Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de ${this.#withdrawalTax}. Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00.`)
            } else {
                console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance},00.`)
            }
        }
    }

    generateIncome(currentDay){
        if(currentDay === this.incomeDay) {
            this.balance += this.balance * this.incomeRate
            console.log(`Seu novo saldo após rendimentos é de R$ ${this.balance},00.`)
        }
    }
}

module.exports = { SavingAccount }