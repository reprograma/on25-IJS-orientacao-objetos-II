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



    // transferTo(anotherAccount, amount) {
    //     if (!(anotherAccount instanceof BankAccount)) {
    //         console.log('Informe uma conta válida!');
    //         return;
    //     }

    //     let amountToBeDebited = amount;
    //     if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
    //         amountToBeDebited = amount + amount * this.bank.transferTax;
    //         console.log(
    //             `Essa transferência terá uma taxa de ${this.bank.transferTax * 100
    //             }%, pois se trata de uma transferência entre bancos diferentes.`
    //         );
    //     }

    //     if (this.#balance >= amountToBeDebited) {
    //         this.#balance -= amountToBeDebited;
    //         anotherAccount.balance += amount;

    //         console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
    //         console.log(
    //             `O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
    //         );
    //     } else {
    //         console.log(
    //             `Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${this.#balance
    //             }. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
    //         );
    //     }
    //}

    // creditAmountRate(amount){
    //      let rateValue = this.incomeRate * 100
    //      amount = amount * rateValue
    //      this.creditAmount(amount)

    // }



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









