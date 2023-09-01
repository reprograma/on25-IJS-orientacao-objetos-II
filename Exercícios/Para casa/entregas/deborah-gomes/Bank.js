class Bank {
	bankCode;
	bankName;
	#trasferTax;
	#managers = [];
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

	contractManager(managers) {
		this.#managers.push(managers);
		console.log(`Gerente ${this.#managers.name} contratado para o banco ${this.bankName}`);
	  }
	
}

module.exports = { Bank };
