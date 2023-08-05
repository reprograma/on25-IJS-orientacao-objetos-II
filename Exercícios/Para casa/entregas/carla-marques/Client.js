
// ### Client
// A classe `Client` deve ser alterada da seguinte maneira:
// - Deve ser herdada de `Person`. Com isso, as declarações e métodos que vêm da classe mãe não estarão mais na classe `Client`.

// - Métodos novos:
//   - `#getAnyManager(bank)`, privado, a ser usado apenas dentro da própria classe.
//     - Busca e retorna, de maneira aleatória, um gerente do array de gerentes do banco.
//     - Chama a função `addClient()` daquele gerente escolhido, passando o nome do cliente.

// - Métodos alterados:
//   - `addBank(bank)`:
//     - Chama o método `#getAnyManager(bank)`, para buscar um gerente para aquele cliente.
//     - Adiciona na array `banks`, além do banco, o gerente escolhido. Agora, `banks` é uma array de objetos.
//     - Imprime na console, além da confirmação de adição do banco, o nome da gerente escolhida.
//   - `removeBank(bank)`: `element.bankCode` agora será `element.bank.bankCode`, pois agora banks é uma array de objetos
//   - `hasAccountInThisBank(bank)`: `element.bankCode` agora será `element.bank.bankCode`, pois agora banks é uma array de objetos

const { Bank } = require('./Bank');
const { Person } = require('./Person');

class Client extends Person{ 
	banks = [];   
	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bank.bankCode === bank.bankCode) !==
			undefined
		);
	}
	#getAnyManager(bank) {
		const managers = bank.managers;
		const randomIndex = Math.floor(Math.random() * managers.length);
		const manager = managers[randomIndex];
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
		const manager = this.#getAnyManager(bank);
        this.banks.push({ bank, manager });
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients++;

		console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}. Sua gerente é ${manager.name}.`);
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
			(element) => element.bank.bankCode !== bank.bankCode
		);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients--;

		console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
	}
}

module.exports = { Client };
