const { BankAccount } = require("./BankAccount")

class CurrentAccount extends BankAccount {
	transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

		if(this.balance >= amount) {
			this.balance -= amount;
			anotherAccount.balance += amount;
			console.log(`Transferência de R$${amount} realizada com sucesso. Seu saldo é R$${this.balance}`)
		} else {
			console.log('Saldo insuficiente para realizar a operação.')
		}
	}
}

module.exports = {CurrentAccount}