const { BankAccount } = require('./BankAccount')

class SavingAccount extends BankAccount {
    #qtdWithdrawal = 0;
    #MAX_OF_WITHDRAWAL = 2
    #withdrawalTax = 0.03;
    incomeRate;
    incomeDay;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber)
        this.incomeDay = incomeDay;
        this.incomeRate = incomeRate;
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal
    }

    get withdrawalTax() {
        return this.#withdrawalTax
    }

    cashWithdrawal(amount) {
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas`);

        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
            if(this.balance >= amount) {
                this.balance -= amount;
                this.#qtdWithdrawal++;
                console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
            } else {
                console.log(`Você não tem saldo suficiente para essa operação.`)
            }
        } else {
            const amountWithTax = amount + (amount * this.#withdrawalTax);
            if(this.balance >= amountWithTax) {
                this.balance -= amountWithTax;
                this.#qtdWithdrawal++;
                console.log(`Retirada realizada com sucesso. Seu saldo é R$ ${this.balance},00`)
            } else {
                console.log(`Você não tem saldo suficiente para essa operação.`)
            }
        }

        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
    }

    generateIncome(currentDay) {
        if(currentDay === this.incomeDay) {
            let income = this.balance * this.incomeRate
            this.balance += income
            console.log(`Seu dinheiro rendeu! Seu saldo agora é R$${this.balance}`)
        } else {
            console.log(`Hoje você não teve rendimentos. Seu saldo é R$${this.balance}.`)
        }
    }
}

module.exports = {SavingAccount}