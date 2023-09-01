const { Bank } = require('./Bank');
const { Client } = require('./Client');

class BankAccount {
    constructor(client, bank, accountNumber, agencyNumber) {
        this.validateClient(client);
        this.validateBank(bank);
        this.validateClientAccount(client, bank);

        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this._balance = 0;
    }

    validateClient(client) {
        if (!(client instanceof Client)) {
            throw new Error('Informe um cliente válido');
        }
    }

    validateBank(bank) {
        if (!(bank instanceof Bank)) {
            throw new Error('Informe um banco válido');
        }
    }

    validateClientAccount(client, bank) {
        if (!client.hasAccountInBank(bank)) {
            throw new Error(
                `Cliente do CPF ${client.cpf} não possui conta no banco ${bank.bankName}`
            );
        }
    }

    getBalance() {
        return this._balance;
    }

    creditAmount(amount) {
        this._balance += amount;
        console.log(`O novo saldo da conta é: R$ ${this._balance}`);
    }

    debitAmount(amount) {
        this._balance -= amount;
        console.log(`O novo saldo da conta é: R$ ${this._balance}`);
    }

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida!');
            return;
        }

        let amountToBeDebited = amount;
        if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
            amountToBeDebited = amount + amount * this.bank.transferTax;
            console.log(
                `Essa transferência terá uma taxa de ${
                    this.bank.transferTax * 100
                }%, pois se trata de uma transferência entre bancos diferentes.`
            );
        }

        if (this._balance >= amountToBeDebited) {
            this._balance -= amountToBeDebited;
            anotherAccount.creditAmount(amount);

            console.log(`O saldo atual da conta de origem é de R$ ${this._balance}`);
            console.log(
                `O saldo atual da conta de destino é de R$ ${anotherAccount.getBalance()}`
            );
        } else {
            console.log(
                `Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
                    this._balance
                }. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
            );
        }
    }

    closeAccount() {
        if (this._balance === 0) {
            console.log(
                `Encerrando conta de ${this.client.name} no banco ${this.bank.bankName}.`
            );
            this.client = undefined;
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            this.bank = undefined;
            console.log(`Conta encerrada!`);
        } else {
            console.log(
                `Você possui um saldo de R$ ${
                    this._balance
                }. Para encerrar a conta é necessário que o saldo seja igual a zero.`
            );
        }
    }

    cashWithdrawal(amount) {
        if (amount <= 0) {
            console.log('O valor de saque deve ser maior que zero.');
            return;
        }

        if (this._balance >= amount) {
            this._balance -= amount;
            console.log(`Saque de R$ ${amount} realizado com sucesso.`);
            console.log(`Saldo atual da conta é de R$ ${this._balance}`);
        } else {
            console.log(
                `Saldo insuficiente para realizar o saque. Seu saldo atual é de R$ ${this._balance}.`
            );
        }
    }
}

module.exports = { BankAccount };


