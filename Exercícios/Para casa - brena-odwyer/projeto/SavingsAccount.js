const { BankAccount } = require("./BankAccount"); // Desconsiderar as anotações que são apenas minhas anotações em aula

class SavingsAccount extends BankAccount {
    client
    bank
    accountNumber
    agencyNumber
    incomeRate
    incomeDay
    // método generateIncome(currentDay), recebe o dia atual, vê se é igual o incomeDay e mostra o novo saldo
    // cashWithdrawal vamos sobreescrever, há um limite de quantos saques a pessoa pode fazer

    #qtdWithdrawal = 0 // começa em zero pq a pessoa não fez nenhuma retirada ainda
    #MAX_OF_WITHDRAWAL = 2 // por padronização usamos a letra maiúscula para constantes, esse valor não vai mudar
    #withdrawalTax = 0.03

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay){
    super(client, bank, accountNumber, agencyNumber)
        this.incomeRate = incomeRate
        this.incomeDay = incomeDay
    }

    generateIncome(currentDay){
        if(currentDay == this.incomeDay) {
            this.balance += this.balance * this.incomeRate
            console.log(`Novo saldo com redimentos é ${this.balance}`)
        }
    }

    cashWithdrawal(amount){ // sobreescrevendo o método que vem da classe mãe, BankAccount. Como vamos sobreescrever por completo não precisa do super
        console.log(`Você já realizou ${this.#qtdWithdrawal}. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} gratuitas`)

        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) { // desafio: evitar a repetição de código
            if(this.balance >= amount){
                this.balance -= amount;
                this.#qtdWithdrawal++; // aí a próxima vez que a pessoa for fazer a retirada vai incrementar
                console.log(`Retirada realizada com sucesso. Seu saldo restante é ${this.balance}`)
            }  else {
                console.log(`Saldo insuficiente. Seu saldo é ${this.balance}`)
            }
        } else { // se a pessoa já fez 2 ou mais retiradas
            const amountWithTax = amount + (amount * this.#withdrawalTax) // o valor sendo debitado + o valor vezes a taxa
            if(this.balance >= amountWithTax) {
                this.balance -= amountWithTax
                this.#qtdWithdrawal++; 
                console.log(`Retirada realizada com sucesso. Seu saldo restante é ${this.balance}`)
            } else {
                console.log(`Saldo insuficiente. Seu saldo é ${this.balance}`)
            }
        }

        console.log(`Foram realizadas ${this.#qtdWithdrawal} retiradas`)
    }

}

module.exports = { SavingsAccount}