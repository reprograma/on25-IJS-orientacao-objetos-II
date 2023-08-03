const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount');

class CurrentAccount extends BankAccount {
    constructor(client, bank, accountNumber, agencyNumber) {
        super(client, bank, accountNumber, agencyNumber);
    }

    transferTo(anotherAccount, amount) {
        super.transferTo();
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida!');
            return;
        } else {
            if (amount > this.balance) {
                return console.log(`Seu saldo atual é insuficiente para realizar essa transferência`);
            } else {
                const anotherClientName = anotherAccount.client ? anotherAccount.client.name : 'cliente desconhecido';
                const anotherBank = anotherAccount.bank;
                if (amount <= this.balance && anotherBank == this.bank) {
                    anotherAccount.balance += amount;
                    this.balance -= amount;
                    return console.log(`Transferência realizada com sucesso para ${anotherClientName}. Seu saldo atual é de R$ ${this.balance}`);
                } else {
                    return console.log('Ops, ocorreu um erro. Tente novamente mais tarde!');
                }

            }
        }

    }
}

module.exports = { CurrentAccount };