const {BankAccount} = require ('./BankAccount')


class SavingAccount extends BankAccount{
    #qtdWithdrawal = 0; 
    #MAX_OF_WITHDRAWAL = 2;  // valor constante
    #withdrawalTax = 0.03;

    cashWithdrawal(amount){ // soobescrendo o metodo da classe mae 
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem ... ${this.#MAX_OF_WITHDRAWAL}`)

        

    }
}