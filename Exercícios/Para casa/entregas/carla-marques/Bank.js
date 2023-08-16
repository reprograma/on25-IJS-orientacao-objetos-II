// ### Bank
// A classe `Bank` deve ser alterada da seguinte maneira:
// - Criar um atributo `managers`, responsável por guardar os gerentes daquele banco. Inicializada com uma array vazia.
// - Criar um método `contractManager(manager)`, responsável por adicionar um novo gerente na array `managers`. Deve ser feita uma validação para confirmar se o parâmetro recebido é um gerente válido.
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
			console.log(`Gerente ${manager.name} contratada no banco ${this.bankName}.`);
		}else{
			console.log('Informe um gerente válido');
		}
	}
}

module.exports = { Bank };
