const { BankAccount } = require('../../projeto/BankAccount');

class CurrentAccount extends BankAccount {

	constructor(client, bank, accountNumber, agencyNumber) {
		super(client, bank, accountNumber, agencyNumber)
	}

	transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

		if (super.balance >= amount) {
			super.balance -= amount;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${super.balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					super.balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
	}

}

module.exports = { CurrentAccount };
