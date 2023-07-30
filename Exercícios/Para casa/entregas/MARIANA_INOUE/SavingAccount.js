const { BankAccount } = require('./BankAccount')
const { Client } = require('./Client');
const { Bank } = require('./Bank');

class SavingAccount extends BankAccount {
    incomeDay;
    incomeRate;
    maxFreeWithdrawals = 3;
    #qtdWithdrawal;
    #withdrawalTax
    constructor(client, bank, accountNumber, agencyNumber, incomeDay, incomeRate) {

        super(client, bank, accountNumber, agencyNumber)
        this.incomeDay = incomeDay;
        this.incomeRate = incomeRate;
        this.#withdrawalTax = 0.03
        this.#qtdWithdrawal = 0

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

    generateIncome(currentDay) {
        if (this.incomeDay === currentDay) {
            this.balanceAdd(this.incomeRate)
            console.log(`Hoje é dia ${this.incomeDay} e taxa rendimento será de ${this.incomeRate}.`)
        } else {
            console.log(`Sem rendimento para hoje.`)
        }
    }

    cashWithdrawal(amount) {
        console.log(`Informação, conta poupança: Até 2 saques não haverá cobrança de taxas.`)
        console.log(`Ocorreu adição de taxa de ${this.#withdrawalTax}, pois é o ${this.#qtdWithdrawal}° saque.`)
        if (this.#qtdWithdrawal < this.maxFreeWithdrawals) {
            super.cashWithdrawal(amount)
            console.log(`Quantidade de saques realizado: ${this.#qtdWithdrawal}`)
            console.log(`Saque realizado de R$${amount},00, com sucesso.`)
        } else if (this.#qtdWithdrawal >= this.maxFreeWithdrawals) {
            let plusTax = this.#withdrawalTax * 100
            amount = amount + plusTax
            this.debitAmount(amount)
            return
        }
        this.#qtdWithdrawal++
    }
}

module.exports = { SavingAccount }









