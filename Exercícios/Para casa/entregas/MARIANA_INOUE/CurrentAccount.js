const { BankAccount } = require('./BankAccount')


class CurrentAccount extends BankAccount {
    #balance = 0;

    
    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida!');
            return;
        }

        let amountToBeDebited = amount;
        if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
            amountToBeDebited = amount + amount
            console.log(`Transferência sem taxa de transação XXXXXX`)
        }

        if (this.#balance >= amountToBeDebited) {
            this.#balance -= amountToBeDebited;
            anotherAccount.balance += amount;

            console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
            console.log(
                `O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
            );
        } else {
            console.log(
                `Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${this.#balance
                }. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
            );
        }
    }
}


module.exports = { CurrentAccount }