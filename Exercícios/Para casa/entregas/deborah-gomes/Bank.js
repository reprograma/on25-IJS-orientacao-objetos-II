class Bank {
	#bankCode;
	#bankName;
	#transferTax;
	#managers = [];
	static createdBanks = [];
  
	constructor(bankCode, bankName, transferTax) {
	  this.#bankCode = bankCode;
	  this.#bankName = bankName;
	  this.#transferTax = transferTax;
	  Bank.createdBanks.push({
		bankCode: this.#bankCode,
		qtdClients: 0,
	  });
	}
  
	get transferTax() {
	  return this.#transferTax;
	}
  
	contractManager(manager) {
	  this.#managers.push(manager);
	  console.log(`Gerente ${manager.name} contratado para o banco ${this.#bankName}`);
	}
  }
  
  module.exports = { Bank };
  
