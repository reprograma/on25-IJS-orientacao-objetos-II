const { Person } = require('./Person');

// Criar essa classe
class Manager extends Person {
	#salary;
	clients = [];

	constructor(name, cpf, salary) {
		super(name, cpf);
		this.#salary = salary;
	}

	get salary() {
		return this.#salary;
	}

	set salary(newSalary) {
		this.#salary = newSalary;
	}

	addClient(client) {
		this.clients.push(client);
	}
}

module.exports = { Manager };
