const { BankAccount } = require("./BankAccount");

class SavingAccount extends BankAccount{
    incomeRate;
    incomeDay;
    #qtdWithdrawal = 0; //quantidade de retiradas em bancos 24h
    #MAX_OF_WITHDRAWAL = 2;
    #withdrawalTax = 0.03; //taxa a ser cobrada em cada retirada de banco 24h

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay){
        super(client, bank, accountNumber, agencyNumber);
        this.incomeRate = incomeRate;
        this.incomeDay = incomeDay;
    }

    get qtdWithdrawal(){
        return this.#qtdWithdrawal;
    }

    get withWidrawalTax(){
        return this.#withdrawalTax;
    }

    set withWidrawalTax(newValueWithWidrawalTax){
        this.#withdrawalTax = newValueWithWidrawalTax;
    }

    cashWithdrawal(amount){
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a mais ${this.#MAX_OF_WITHDRAWAL} retirada(s) `)

        const incrementQtdWithdrawal = this.#qtdWithdrawal++;
        const infoBalanceMessage = console.log(`Retirada realizada com sucesso! Seu saldo restante é R$ ${this.balance},00`)
        const notEnoughBalanceMessage = console.log("Você não tem saldo suficiente para essa opção ):")

        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL){
            if(this.balance >= amount){
                this.balance -= amount;
                incrementQtdWithdrawal;
                infoBalanceMessage
            } else {
                notEnoughBalanceMessage;
            }
        } else {
            const amountWithTax = amount + (amount * this.#withdrawalTax);
            if(this.balance >= amountWithTax){
                this.balance -= amountWithTax;
                incrementQtdWithdrawal;
                infoBalanceMessage
            } else {
                notEnoughBalanceMessage;
            }
        }

        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas`)
    }

    generateIncome(currentDay){
        if(currentDay === this.incomeDay){
            this.balance += (this.balance * this.incomeRate)
            console.log(`Seu novo saldo após rendimentos é de R$ ${this.balance}`)
        }
    }

}

module.exports = { SavingAccount };