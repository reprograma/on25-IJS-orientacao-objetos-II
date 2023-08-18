const { Bank } = require('./Bank');
const { Person } = require('./Manager');

class Client extends Person {
	banks = [];

	constructor(name, cpf) {
		super(name, cpf);
	}

	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bankCode === bank.bankCode) !==
			undefined
		);
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
		this.banks.push(bank);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients++;
		const result = this.#getAnyManager(bank);
		this.banks.push(`${result.name}`);
		console.log(`Banco ${bank.bankName} e Gerente ${result.name}, adicionado à cliente ${this.name}.`);
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
			(element) => element.bankCode !== bank.bankCode
		);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients--;

		console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
	}

	#getAnyManager(bank) {
		const managers = bank.managers;
		const anyManager = Math.floor(Math.random() * managers.length);
		const result = managers[anyManager];
		result.addClient(this);
		return result;
	}
}

module.exports = { Client };
