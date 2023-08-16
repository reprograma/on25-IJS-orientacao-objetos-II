const { Bank } = require('./Bank');
const { Client } = require('./Client');

class BankAccount {
	client;
	bank;
	accountNumber;
	agencyNumber;
	#balance = 0;

	constructor(client, bank, accountNumber, agencyNumber) {
		if (!(client instanceof Client)) {
			return new Error('Informe um cliente válido');
		}
		if (!(bank instanceof Bank)) {
			return new Error('Informe um banco válido');
		}
		// ### BankAccount
		// A classe `BankAccount` deve ser alterada da seguinte maneira:
		// - No constructor, no momento em que se valida se o cliente tem conta naquele banco, `element.bankCode` agora será `element.bank.bankCode`, pois agora banks é uma array de objetos.
		if (
			client.banks.find((element) => element.bank.bankCode === bank.bankCode) ===
			undefined
		) {
			return new Error(
				`Cliente do CPF ${client.cpf} não possui conta no banco ${bank.bankName}`
			);
		}
		this.client = client;
		this.bank = bank;
		this.accountNumber = accountNumber;
		this.agencyNumber = agencyNumber;
	}

	get balance() {
		return this.#balance;
	}

	set balance(newBalance) {
		this.#balance = newBalance;
	}

	creditAmount(amount) {
		this.#balance += amount;
		console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
	}

	debitAmount(amount) {
		this.#balance -= amount;
		console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
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

		if (this.#balance >= amountToBeDebited) {
			this.#balance -= amountToBeDebited;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
	}

	closeAccount() {
		if (this.#balance === 0) {
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
					this.#balance
				}. Para encerrar a conta é necessário que o saldo seja igual a zero.`
			);
		}
	}
	// Criar o método
	// - [ ] `cashWithdrawal(amount)`: realiza retiradas de dinheiro em bancos 24 horas.
	//   - Caso haja saldo suficiente, debitar o valor do saldo.
	//   - Caso não haja saldo suficiente para a operação, retornar uma mensagem para o usuário.
	//   - Imprima na console o resultado.
	// Criar método cashWithdrawal
	cashWithdrawal(amount) {
		if (this.#balance >= amount) {
			this.#balance -= amount;
			console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
		} else {
			console.log(
				`Saldo insuficiente para realizar o saque. Seu saldo atual é de ${
					this.#balance
				}. Para realizar esse saque você precisa ter ${amount} em conta.`
			);
		}
		
	}
} 

module.exports = { BankAccount };
