const { Manager } = require('./Manager');


class Bank {
	bankCode;
	bankName;
	#trasferTax;
	managers = [];

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

	contractManager(manager) {
		if (manager instanceof Manager) {
			this.managers.push(manager);
			console.log(`Gerente ${manager} contratada no banco ${this.bankName}.`);
		} else {
			console.log(`Esse gerente náo é válido!`)
		}
	}
}

module.exports = { Bank };
