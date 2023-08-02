const { BankAccount } = require("./BankAccount");

class CurrentAccount extends BankAccount {
    // sobreescrever o método transferto, pq nele há uma taxa na transferência, aqui vamos fazer uma transferência sem taxa
    client
    bank
    accountNumber
    agencyNumber

    constructor(client, bank, accountNumber, agencyNumber){
    super(client, bank, accountNumber, agencyNumber)}

    transferTo(anotherAccount, amount){
        if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}
        let amountToBeDebited = amount;

        if (this.balance >= amountToBeDebited) {
			this.balance -= amountToBeDebited;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}

    }

}

module.exports = {CurrentAccount}