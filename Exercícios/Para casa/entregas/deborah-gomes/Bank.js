class Bank {
	bankCode;
	bankName;
	#trasferTax;
<<<<<<< HEAD:Exercícios/Para casa/entregas/deborah-gomes/Bank.js
	#managers = [];
=======

>>>>>>> cfb03f494e35750f49cb5ed6f1e03b0fb3c2b23b:Exercícios/Para casa/projeto/Bank.js
	static createdBanks = [];

	constructor(bankCode, bankName, transferTax) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#trasferTax = transferTax;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
		});
	}

	get transferTax() {
		return this.#trasferTax;
	}
<<<<<<< HEAD:Exercícios/Para casa/entregas/deborah-gomes/Bank.js

	contractManager(managers) {
		this.#managers.push(managers);
		console.log(`Gerente ${this.#managers.name} contratado para o banco ${this.bankName}`);
	  }
	
=======
>>>>>>> cfb03f494e35750f49cb5ed6f1e03b0fb3c2b23b:Exercícios/Para casa/projeto/Bank.js
}

module.exports = { Bank };
