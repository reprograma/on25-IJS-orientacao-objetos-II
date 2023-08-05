const { Bank } = require('./Bank');
const { Person } = require('./Person');

class Client extends Person {
	banks = [];

	constructor(name, cpf) {
		super(name, cpf);
	}

	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bank.bankCode === bank.bankCode) !== // element.banksCode agora é element.bank.bankCode, pois agora banks é uma array de objetos
			undefined
		);
	}

	// Método criado
	#getAnyManager(bank) {
		const managersLength = bank.managers.length;
		const randomIndex = Math.floor(Math.random() * managersLength);
		const manager = bank.managers[randomIndex];
		manager.addClient(this.name);

		return manager;
	}

	addBank(bank) {
		if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

		if (this.hasAccountInThisBank(bank)) {
			console.log(
				`Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
			);
			return;
		}

		const manager = this.#getAnyManager(bank); // Adicionado
		this.banks.push({ bank, manager }); // Adicionado o bank e o manager. Agora banks é uma array de objetos

		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients++;

		console.log(
			`Banco ${bank.bankCode} adicionado à cliente ${this.name}. Sua gerente é ${manager.name}.` // Imprimir quem é a gerente
		);
	}

	removeBank(bank) {
		if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

		if (!this.hasAccountInThisBank(bank)) {
			console.log(
				`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`
			);
			return;
		}

		this.banks = this.banks.filter(
			(element) => element.bank.bankCode !== bank.bankCode // element.banksCode agora é element.bank.bankCode, pois agora banks é uma array de objetos
		);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients--;

		console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
	}
}

module.exports = { Client };
