const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount')
const { CurrentAccount } = require('./CurrentAccount')

class SavingAccount extends BankAccount {
    incomeRate
    incomeDay
    #qtdWithdrawal
    MAX_OF_WITHDRAWAL
    #withdrawalTax

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber)
        this.incomeRate = incomeRate
        this.incomeDay = incomeDay
        this.MAX_OF_WITHDRAWAL = 2 // quantidade de saques gratuitos // A letra maiúscula é usada para constantes
        this.#withdrawalTax = 0.03
        this.#qtdWithdrawal = 0
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal
    }

    get withdrawalTax() {
        return this.#withdrawalTax
    }

    set withdrawalTax(tax) {
        this.#withdrawalTax = tax
    }
    //withdrawalTax = cada conta pode realizar até 2 saques gratuitos.

    generateIncome(currentDay){
        if (currentDay >= this.incomeDay){
            this.balance = this.balance + this.incomeRate
            console.log(`Seu saldo atualizado é de R$ ${this.balance},00!`)
        }
    }


    cashWithdrawal(amount) { //não vai utilizar o super, pq vai sobrescrever o método por completo
        console.log(`Você já realizou ${this.#qtdWithdrawal} retirada. Você tem direito a ${this.MAX_OF_WITHDRAWAL} retirada(s)`)
        
        if(this.#qtdWithdrawal < this.MAX_OF_WITHDRAWAL) {
            if(this.balance >= amount) {
                this.balance -= amount
                this.#qtdWithdrawal++
                console.log(`Retirada realizada com sucesso. Seu saldo restante é de R$ ${this.balance},00`)
            } else {
                console.log(`Você não tem saldo suficiente para esta operação.`)
            }
        } else {
            const amountWithTax = amount + (amount * this.#withdrawalTax)
            if(this.balance >= amountWithTax) {
                this.balance -= amountWithTax
                this.#qtdWithdrawal++
                console.log(`Retirada realizada com sucesso. Seu saldo restante é de R$ ${this.balance},00`)
            } else {
                console.log(`Você não tem saldo suficiente para esta operação.`)
            }
        }

        console.log(`Você já realizou ${this.#qtdWithdrawal} retirada(s).`)
    }
}

module.exports = { SavingAccount }