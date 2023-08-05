const { BankAccount} = require('./BankAccount');

class SavingAccount extends BankAccount {
    #qtdWithdrawal = 0;
    #MAX_OF_WITHDRAWAL = 2;
    #withdrawalTax = 0.03;

    cashWithdrawal(amount) {
        console.log(`Você já realizou ${this.#qtdWithdrawal} returadas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL}`)
       
        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
            if(this.balance >= amount) {
                this.balance -= amount;
                this.#qtdWithdrawal ++;
                console.log(`Retirada realizada com sucesso. Seu saldo atual é de R$ ${this.#MAX_OF_WITHDRAWAL}`)
            } else {
                console.log(`Você não possui saldo suficiente para essa transação`)
            }
        } else {
            const amountWithTax = amount + (amount * this.#withdrawalTax);
            if (this.balance >= amountWithTax) {
                this.balance -= amountWithTax;
                this.#qtdWithdrawal ++;
                console.log(`Retirada realizada com sucesso. Seu saldo atual é de R$ ${this.balance}`)
            }else {
                console.log(`Você não possui saldo sauficiente para essa transação`);
            }
        }
        console.log (`Você já realizou ${this.#qtdWithdrawal} retiradas`);
    }
}