const { Manager } = require('./Manager');

class Bank {
	bankCode;
	bankName;
	#trasferTax;
	managers = []; // Criado

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

	// Método criado
	contractManager(manager) {
		if (!(manager instanceof Manager)) {
			console.log('Informe um gerente válido');
			return;
		}

		this.managers.push(manager);
		console.log(
			`Gerente ${manager.name} contratada no banco ${this.bankName}.`
		);
	}
}

module.exports = { Bank };
