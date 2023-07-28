const { Bank } = require('./Bank');

// DESAFIO: Herdar Client de uma classe Person
class Client {
	// DESAFIO: Remover atributos que foram herdados
	name;
	#cpf;
	banks = [];

	constructor(name, cpf) {
		// DESAFIO: Atualizar constructor após herança
		this.name = name;
		this.#cpf = cpf;
	}

	get cpf() {
		return this.#cpf;
	}

	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bankCode === bank.bankCode) !== // DESAFIO: element.banksCode agora será element.bank.bankCode
			undefined
		);
	}

	// DESAFIO: Criar método getAnyManager

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

		// DESAFIO: Chamar método getAnyManager, salvando o retorno em uma const manager
		this.banks.push(bank); // DESAFIO: Agora, banks será uma array de objetos, então é necessário salvar da seguinte maneira: this.banks.push({ bank: bank, manager: manager }) - para simplificar, podemos escrever assim: this.banks.push({ bank, manager })
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients++;

		console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}.`); // DESAFIO: Atualizar a mensagem para exibir também quem é a gerente da cliente.
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
			(element) => element.bankCode !== bank.bankCode // DESAFIO: element.banksCode agora será element.bank.bankCode
		);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients--;

		console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
	}
}

module.exports = { Client };
