const { Manager } = require("./Manager");
class Bank {
	bankCode;
	bankName;
	#trasferTax;
	his.managers = [];

	static createdBanks = [];

	constructor(bankCode, bankName, transferTax) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#trasferTax = transferTax;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
			this.managers = [];   
		});
	}

	get transferTax() {
		return this.#trasferTax;
	}

	contractManager(manager) {
    if (!(manager instanceof Manager)) {
      console.log("Informe um gerente válido.");
      return;
    }

    this.managers.push(manager);
    console.log(`Gerente ${manager.name} contratada no banco ${this.bankName}.`);
  }
}

module.exports = { Bank };
