
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


module.exports = { Person, Manager };