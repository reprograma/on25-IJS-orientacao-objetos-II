
const { BankAccount } = require('./BankAccount')

class CurrentAccount extends BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;

    constructor(client, bank, accountNumber, agencyNumber){
        super(client, bank, accountNumber, agencyNumber)
    }
    
    transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}
	
		if (this.balance >= amount) {
			this.balance -= amount;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
	
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.balance
				}. Para realizar essa transferência você precisa ter ${amount} em conta.`
			);
		}
	}
}

module.exports = { CurrentAccount };