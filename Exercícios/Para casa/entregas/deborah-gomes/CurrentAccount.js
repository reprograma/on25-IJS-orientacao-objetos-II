const { BankAccount } = require('./BankAccount');

class CurrentAccount extends BankAccount {
    constructor(client, bank, accountNumber, agencyNumber) {
        super(client, bank, accountNumber, agencyNumber);
    }

    isBankAccountValid(anotherAccount) {
        return anotherAccount instanceof BankAccount;
    }

    hasSufficientBalanceForTransfer(amount) {
        return this.getBalance() >= amount;
    }

    transferTo(anotherAccount, amount) {
        if (!this.isBankAccountValid(anotherAccount)) {
            console.log('Informe uma conta válida!');
            return;
        }

        if (this.hasSufficientBalanceForTransfer(amount)) {
            this.debitAmount(amount);
            anotherAccount.creditAmount(amount);

            console.log(`Transferência de R$ ${amount} efetuada com sucesso.`);
            console.log(`Saldo atual da conta de origem é de R$ ${this.getBalance()}`);
            console.log(`Saldo atual da conta de destino é de R$ ${anotherAccount.getBalance()}`);
        } else {
            console.log(`Saldo insuficiente para realizar a transferência.`);
        }
    }
}

module.exports = { CurrentAccount };

