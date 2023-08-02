const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
    #balance = 0;
    incomeRate;
    incomeDay;
    #qtdWithdrawal = 0;
    #withdrawalTax = 7;
    MAX_OF_WITHDRAWAL = 2;

    constructor(client, bank, accountNumber, agencyNumber, incomeDay, incomeRate) {
        super(client, bank, accountNumber, agencyNumber);
        this.incomeDay = incomeDay;
        this.incomeRate = incomeRate;
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal;
    }

    get withdrawalTax() {
        return this.#withdrawalTax;
    }

    set withdrawalTax(newWithdrawaTax) {
        this.#withdrawalTax += newWithdrawaTax;
    }

    cashWithdrawal(amount) {
        if (this.#qtdWithdrawal >= this.MAX_OF_WITHDRAWAL && amount <= this.#balance) {
            this.#balance -= amount;
            this.#qtdWithdrawal += 1;
            console.log(`As primeiras 2 retiradas são gratuitas. `)
            console.log(`Foi cobrado uma taxa de ${this.#withdrawalTax} `)
            console.log(`Sacou o valor de ${amount - this.#withdrawalTax} `)
            console.log(`O saldo atual é de R$${this.#balance}. `)
            console.log(`Você realizou ${this.#qtdWithdrawal} saque(s). `)
            console.log(`Você não possui mais nenhuma retirada gratuita. `)
            return;
        }
        if (this.#qtdWithdrawal == 1 && amount <= this.#balance) {
            this.#balance -= amount;
            this.#qtdWithdrawal += 1;
            console.log(`As primeiras 2 retiradas são gratuitas. `)
            console.log(`Sacou o valor de ${amount} `)
            console.log(`O saldo atual é de R$${this.#balance}. `)
            console.log(`Você realizou ${this.#qtdWithdrawal} saque(s). `)
            console.log(`Você não possui mais nenhuma retirada gratuita. `)
            return;
        } if (this.#qtdWithdrawal == 0 && amount <= this.#balance) {
            this.#balance -= amount;
            this.#qtdWithdrawal += 1;
            console.log(`As primeiras 2 retiradas são gratuitas. `)
            console.log(`Sacou o valor de ${amount} `)
            console.log(`O saldo atual é de R$${this.#balance}. `)
            console.log(`Você realizou ${this.#qtdWithdrawal} saque(s). `)
            console.log(`Você ainda possui 1 retirada gratuita. `)
            return;
        } if (amount > this.#balance) {
            return console.log(`Você não possui saldo o suficiente`)
        } else {
            console.log("Ops, ocorreu algum erro")
        }
    }

    generateIncome(currentDay) {
        if (currentDay == this.incomeDay) {
            this.#balance += this.#balance * this.incomeRate;
            console.log(`Seu novo saldo é ${this.#balance}`)
            return;
        }
    }

}

module.exports = { SavingAccount };