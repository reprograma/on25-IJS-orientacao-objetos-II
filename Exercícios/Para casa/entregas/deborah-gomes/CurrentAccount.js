const { BankAccount } = require('./BankAccount');

class CurrentAccount extends BankAccount {
    constructor(client, bank, accountNumber, agencyNumber) {
        super(client, bank, accountNumber, agencyNumber);
    }

    isValidAccount(anotherAccount) {
        return anotherAccount instanceof BankAccount;
    }

    hasSufficientBalance(amount) {
        return this._balance >= amount;
    }

    transferTo(anotherAccount, amount) {
        if (!this.isValidAccount(anotherAccount)) {
            console.log('Informe uma conta válida!');
            return;
        }

        if (this.hasSufficientBalance(amount)) {
            this._balance -= amount;
            anotherAccount.balance += amount;

            console.log(`Transferência de R$ ${amount} efetuada com sucesso.`);
            console.log(`Saldo atual da conta de origem é de R$ ${this._balance}`);
            console.log(`Saldo atual da conta de destino é de R$ ${anotherAccount.balance}`);
        } else {
            console.log(`Saldo insuficiente para realizar a transferência.`);
        }
    }

    
}

module.exports = { CurrentAccount };
