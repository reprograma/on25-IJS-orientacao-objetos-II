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

        //tentar tirar a repetição do código
        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL){
            if(this.balance >= amount){
                this.balance -= amount;
                this.#qtdWithdrawal++; //incrementar a quantidade de retiradas que a pessoa já fez
                console.log(`Retirada realizada com sucesso! Seu saldo restante é R$ ${this.balance},00`)
            } else {
                console.log("Você não tem saldo suficiente para essa opção ):")
            }
        } else {
            const amountWithTax = amount + (amount * this.#withdrawalTax);
            if(this.balance >= amountWithTax){
                this.balance -= amountWithTax;
                this.#qtdWithdrawal++;
                console.log(`Retirada realizada com sucesso! Seu saldo restante é R$ ${this.balance},00`)
            } else {
                console.log("Você não tem saldo suficiente para essa opção ):")
            }
        }

        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas`)
    }

    generateIncome(currentDay){
        if(currentDay === this.incomeDay){
            this.balance += (this.balance * this.incomeRate)
            console.log(`Seu novo saldo após rendimentos é de R$ ${this.balance}`)
        }
        //se o dia atual for igual ao dia do rendimento, o saldo deve ser atualizado com o valor do rendimento somado
        //retornar o saldo
    }

}

module.exports = { SavingAccount };