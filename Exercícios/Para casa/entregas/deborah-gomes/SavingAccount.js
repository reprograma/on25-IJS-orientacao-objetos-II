const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
    #incomeRate;
    #incomeDay;
    #qtdWithdrawal = 0;
    #MAX_OF_WITHDRAWAL = 2;
    #withdrawalTax = 0.03;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber);
        this.#incomeRate = incomeRate;
        this.#incomeDay = incomeDay;
    }

    get withdrawalTax() {
        return this.#withdrawalTax;
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal;
    }

    cashWithdrawal(amount) {
        if (amount <= 0) {
            console.log('O valor de saque deve ser maior que zero.');
            return;
        }

        console.log(`Saldo atual da conta: R$ ${this.balance}`);
        console.log(`Quantidade de retiradas gratuitas feitas: ${this.#qtdWithdrawal} de ${this.#MAX_OF_WITHDRAWAL}`);

        const isWithinWithdrawalLimit = this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL;
        const taxedAmount = isWithinWithdrawalLimit ? amount : amount + amount * this.#withdrawalTax;

        if (this.balance >= taxedAmount) {
            this.balance -= taxedAmount;
            this.#qtdWithdrawal++;
            const message = isWithinWithdrawalLimit
                ? `Saque de R$ ${amount} realizado com sucesso.`
                : `Saque de R$ ${amount} realizado com taxa de ${this.#withdrawalTax * 100}%.`;
            console.log(message);
            console.log(`Saldo atual da conta: R$ ${this.balance}`);
            console.log(`Quantidade de retiradas gratuitas feitas: ${this.#qtdWithdrawal} de ${this.#MAX_OF_WITHDRAWAL}`);
        } else {
            console.log(`Saldo insuficiente para realizar o saque. Seu saldo atual é de R$ ${this.balance}.`);
        }
    }

    generateIncome(currentDay) {
        if (currentDay === this.#incomeDay) {
            const incomeAmount = this.balance * this.#incomeRate;
            this.balance += incomeAmount;
            console.log(`Rendimento de R$ ${incomeAmount} aplicado. Novo saldo: R$ ${this.balance}`);
        }
    }
}

module.exports = { SavingAccount };
