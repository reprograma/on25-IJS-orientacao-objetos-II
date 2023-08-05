const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
    incomeRate;
    incomeDay;
    #qtdWithdrawal = 0;
    MAX_OF_WITHDRAWAL = 2;
    #withdrawalTax = 0.3;

	constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber)
        this.incomeRate = incomeRate;
        this.incomeDay = incomeDay;
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

    cashWithdrawal(amount) {

        console.log(`Você realizou ${this.#qtdWithdrawal} retiradas até o momento. Você tem direito a ${this.MAX_OF_WITHDRAWAL} retiradas gratuitas`)
        if (this.#qtdWithdrawal < this.MAX_OF_WITHDRAWAL) {
            if (this.balance >= amount) {
                this.balance -= amount;
                this.#qtdWithdrawal++;
                console.log(`Operação realizada! Seu saldo agora é de: R$ ${this.balance},00 - Você realizou ${this.#qtdWithdrawal} retiradas até o momento.`);
            } else {
                console.log(`Você não tem saldo o suficiente para a operação.O seu saldo atual é de R$${this.balance}`)
            }
        } else {
            const amountWithTax = amount + (amount * this.#withdrawalTax) 
            if (this.balance >= amountWithTax) {
                this.balance -= amountWithTax
                this.#qtdWithdrawal++;
                console.log(`Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de ${this.#withdrawalTax}. Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00.`);
            } else {
                console.log(`Você não tem saldo o suficiente para a operação.O seu saldo atual é de R$${this.balance},00`)
            }
    }
}
    
    generateIncome(currentDay) {
        if (currentDay === this.incomeDay) {
            this.balance += (this.incomeRate * this.balance)
            console.log(`Seu novo saldo após rendimentos é de: R$ ${this.balance}`);
        } else {
          console.log(
            `Ops. O seu rendimento estará disponível apenas dia ${this.incomeDay}`
          );
        }
    }
}

module.exports = { SavingAccount }