const { BankAccount } = require('./BankAccount');
// Deve herdar a classe `BankAccount`.
// - [ ] Sobrescrever o método `transferTo(anotherAccount, amount)`.
//   - A transferência será feita sem nenhum tipo de taxa, independente do tipo de conta ou do banco.
//   - Mantenha as verificações de conta bancária e saldo suficiente.

class CurrentAccount extends BankAccount {  
	transferTo(anotherAccount, amount) {
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

module.exports = { CurrentAccount }; 