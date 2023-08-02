class Bank {
	bankCode;
	bankName;
	#transferTax;
	managers
	// DESAFIO: Criar atributo managers (inicializado como array vazia)

	static createdBanks = [];

	constructor(bankCode, bankName, transferTax, managers) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#transferTax = transferTax;
		this.managers = []
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
		});
	}

	get transferTax() {
		return this.#transferTax;
	}
}

module.exports = { Bank };
