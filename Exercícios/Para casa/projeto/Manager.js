const { Bank } = require('./Bank');
const { Client } = require('./Client');

class Manager {
    manager;
    cpf;
    balance;

    constructor(manager, cpf, balance) {
        this.manager = manager;
        this.cpf = cpf;
        this.balance = balance;
    }

}

module.exports = { Manager };