const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
    #qtdWithdrawal = 0;
    #MAX_OF_WITHDRAWAL = 2;
    #withdrawalTax = 0.03;
    incomeRate;
    incomeDay;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber)
        this.#qtdWithdrawal = 0;
        this.#MAX_OF_WITHDRAWAL = 2;
        this.#withdrawalTax = 0.03;
        this.incomeRate = incomeRate;
        this.incomeDay = incomeDay;
    }

    generateIncome(currentDay){
        if (currentDay == this.incomeDay){
            this.#balance += this.incomeRate;

            console.log(`${currentDay} é o dia do rendimento, seu saldo atualizado é de R$ ${this.#balance}`)
        }
    }

    cashWithdrawal(amount) {
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)

        if (this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
            if (this.balance >= amount) {
                this.balance -= amount;
                this.#qtdWithdrawal++;
                console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
            } else {
                console.log(`Você não tem saldo suficiente para essa operação;`);
            }
        } else {
            const amountWithTax = amount + (amount * this.#withdrawalTax);
            if (this.balance >= amountWithTax) {
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

module.exports = { SavingAccount }