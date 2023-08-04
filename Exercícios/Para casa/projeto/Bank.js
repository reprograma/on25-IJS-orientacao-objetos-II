const { Manager } = require('./Manager');

class Bank {
	bankCode;
	bankName;
	#trasferTax;
	// DESAFIO: Criar atributo managers (inicializado como array vazia)
	static managers = [];

	static createdBanks = [];

	constructor(bankCode, bankName, transferTax) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#trasferTax = transferTax;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
		});
		this.managers.push(this.manager);
	}

	get transferTax() {
		return this.#trasferTax;
	}

	// DESAFIO: Criar método contractManager
	contractManager(manager) {
		if (manager instanceof Manager) {
		this.managers.push(manager);
		}
	}
}

module.exports = { Bank };

const bank1 = new Bank(100, 'Lua Bank', 0.01);

const manager1 = new Manager('Maria', 123456789, 5000);

bank1.contractManager(manager1);