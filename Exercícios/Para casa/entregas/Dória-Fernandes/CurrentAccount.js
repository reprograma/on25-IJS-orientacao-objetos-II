const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount');

class CurrentAccount extends BankAccount {
    constructor(client, bank, accountNumber, agencyNumber) {
        super(client, bank, accountNumber, agencyNumber);
    }

    creditAmount(amount) {
        if (amount < 0) {
            console.log("Esse não é um valor válido");
        } else {
            this.balance += amount;
            console.log(`Obrigada por confiar em nossos serviços, ${this.client.name}. Seu saldo atual é de R$${this.balance},00`)
        }
    }

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof CurrentAccount)) {
            console.log('Informe uma conta válida!');
            return;
        } else {
            if (amount > this.balance) {
                return console.log(`Seu saldo atual é insuficiente para realizar essa transferência. Seu saldo atual é de R$${this.balance},00`);
            } else {
                const anotherClientName = anotherAccount.client ? anotherAccount.client.name : 'cliente desconhecido';
                if (amount <= this.balance) {
                    anotherAccount.balance += amount;
                    this.balance -= amount;
                    return console.log(`Transferência realizada com sucesso para ${anotherClientName}. Seu saldo atual é de R$ ${this.balance},00`);
                } else {
                    return console.log('Ops, ocorreu um erro. Tente novamente mais tarde!');
                }

            }
        }

    }
}

module.exports = { CurrentAccount };