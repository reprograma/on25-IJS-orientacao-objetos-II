class Bank {
	bankCode;
	bankName;
	#trasferTax;
	// DESAFIO: Criar atributo managers (inicializado como array vazia)

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

	// DESAFIO: Criar método contractManager
}

module.exports = { Bank };
