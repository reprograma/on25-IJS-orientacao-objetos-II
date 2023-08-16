// ### Manager
// Crie uma classe `Manager` herdando de `Person`:
// - Atributos:
//   - [ ] `#salary`, privado, recebido por instanciação, com métodos get e set
//   - `clients`, deve ser inicializado com uma array vazia

// - Métodos:
//   - [ ] `addClient(client)`, adiciona um novo cliente na array `clients`

const { Bank } = require('./Bank');
const { Person } = require('./Person');

class Manager extends Person{
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