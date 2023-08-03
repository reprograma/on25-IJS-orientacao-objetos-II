const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount');

class CurrentAccount extends BankAccount {

    constructor(client, bank, accountNumber, agencyNumber) {
        super(client, bank, accountNumber, agencyNumber);
    }

    transferTo(anotherAccount, amount) {
        if(!(anotherAccount instanceof BankAccount)) {
            console.log(`Inform uma conta válida!`);
            return;
        }

        if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
            if(this.balance >= amount) {
                this.balance -= amount;
                anotherAccount.balance += amount;
                console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
			    console.log(`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`);
                 
            } else {
                console.log(`Saldo insuficiente para a transferência!`);
            }           
        }
    }
}

module.exports = { CurrentAccount };

/*
const bank1 = new Bank(100, 'Lua Bank', 0.01);
const bank2 = new Bank(200, 'Code Bank', 0.02);

const client1 = new Client('Luara', 123456789);
const client2 = new Client('Simone', 987654321);

client1.addBank(bank1);
client2.addBank(bank2);

const currentAccount1 = new CurrentAccount(client1, bank1, 1111, 2222);
const currentAccount2 = new CurrentAccount(client2, bank2, 3333, 4444);

//console.log(currentAccount1);

currentAccount1.creditAmount(5000);

currentAccount1.transferTo(currentAccount2, 1500);
*/