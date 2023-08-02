const { BankAccount } = require('./BankAccount')

class SavingAccount extends BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;
    incomeRate;
    incomeDay;
    #qtdWithdrawal = 0;
    #withdrawalTax = 0.03;
    #MAX_OF_WITHDRAWAL = 2;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay){
        super(client, bank, accountNumber, agencyNumber)
        this.incomeRate = incomeRate;
        this.incomeDay = incomeDay;
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal;
    }

    get withdrawalTax(){
        return this.#withdrawalTax;
    }

    set withdrawalTax(newWithdrawalTax){
        this.#withdrawalTax = newWithdrawalTax;
    }

    generateIncome(currentDay){
        if(currentDay === this.incomeDay){
            this.balance += this.balance * this.incomeRate
            console.log(`Seu novo saldo após rendimentos é de R$ ${this.balance},00
            `)
        }
    }
    
      cashWithdrawal(amount){
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. As primeiras ${this.#MAX_OF_WITHDRAWAL} retiradas são gratuitas.`)
        
        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL){
            if(this.balance >= amount){
                this.balance -= amount
                this.#qtdWithdrawal++
                console.log(`Retirada realizada. O saldo atual da conta é de R$ ${this.balance},00 
                \n Total de retiradas: ${this.qtdWithdrawal}`)
            }else{
                console.log(`Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance},00.`)
            }
        }
        else{
            const amountWithTax = amount + (amount * this.#withdrawalTax);
            if(this.balance >= amountWithTax){
                this.balance-=amountWithTax;
                this.#qtdWithdrawal++
                console.log(`Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de ${this.withdrawalTax * 100}% 
            \n Retirada realizada. O saldo atual da conta é de R$ ${this.balance} `)
            }else{
                console.log('Voce nao tem saldo suficiente para essa operação.')
            }
            
            console.log(`Total de retiradas: ${this.qtdWithdrawal}\n`)
            
        }

        
    }
}

module.exports = { SavingAccount};