// Criar classe Person
class Person {
	name;
	#cpf;

	constructor(name, cpf) {
		this.name = name;
		this.#cpf = cpf;
	}

	get cpf() {
		return this.#cpf;
	}
}

module.exports = { Person };
