const { BankAccount } = require("../projeto/BankAccount");


class CurrentAccount extends BankAccount {
    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida!');
            return;
        }

        if (this.balance >= amount) {
            this.balance -= amount;
            anotherAccount.balance += amount;

            console.log(`Transferência realizada com sucesso!`);
            console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);

        } else {
            console.log(
                `Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ ${this.balance}.`
            );
        }
    }
}


module.exports = { CurrentAccount };


