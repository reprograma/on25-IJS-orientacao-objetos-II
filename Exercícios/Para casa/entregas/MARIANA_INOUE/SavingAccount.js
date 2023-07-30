const { BankAccount } = require('./BankAccount')
const { Client } = require('./Client');
const { Bank } = require('./Bank');

class SavingAccount extends BankAccount {
    incomeDay;
    incomeRate;
    #balance = 0;
    withdrawalCount = 0;
    maxFreeWithdrawals = 2;
    withdrawalFee
    constructor(client, bank, accountNumber, agencyNumber, incomeDay, incomeRate, withdrawalFee) {
        super(client, bank, accountNumber, agencyNumber)
        if (!(client instanceof Client)) {
            return new Error('Informe um cliente válido **********');
        }
        if (!(bank instanceof Bank)) {
            return new Error('Informe um banco válido [[[[[[[[[[[[');
        }
        if (
            client.banks.find((element) => element.bankCode === bank.bankCode) ===
            undefined
        ) {
            return new Error(
                `Cliente do CPF ${client.cpf} não possui conta no banco =========== ${bank.bankName}`
            );
        }
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.incomeDay = incomeDay;
        this.incomeRate = incomeRate;
        this.withdrawalFee = withdrawalFee
    }


    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida!');
            return;
        }

        let amountToBeDebited = amount;
        if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
            amountToBeDebited = amount + amount * this.bank.transferTax;
            console.log(
                `Essa transferência terá uma taxa de ${this.bank.transferTax * 100
                }%, pois se trata de uma transferência entre bancos diferentes.`
            );
        }

        if (this.#balance >= amountToBeDebited) {
            this.#balance -= amountToBeDebited;
            anotherAccount.balance += amount;

            console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
            console.log(
                `O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
            );
        } else {
            console.log(
                `Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${this.#balance
                }. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
            );
        }
    }

    generateIncome(incomeDay) {
        if (this.incomeDay === incomeDay) {
            this.#balance += this.#balance * this.incomeRate

            console.log(`Seu investimento R$${this.#balance}, taxa rendimento ${this.incomeRate} no dia ${this.incomeDay}`)
        }
    }


    cashWithdrawal(amount) {
        if (this.withdrawalCount < this.maxFreeWithdrawals) {
            super.cashWithdrawal(amount)
        } else if (this.withdrawalCount >= this.maxFreeWithdrawals) {

            this.#balance -= amount * this.withdrawalFee
            console.log(`Saque realizado com sucesso. Adição de taxa.`)
        }

        this.withdrawalCount++
    }




}

module.exports = { SavingAccount }