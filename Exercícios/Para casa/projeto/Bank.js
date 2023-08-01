const { Manager } = require('../entregas/Manager');

class Bank {
    bankCode;
    bankName;
    #trasferTax;
    managers;

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#trasferTax = transferTax;
        this.constructor.createdBanks.push({
            bankCode: this.bankCode,
            qtdClients: 0,
        });
        this.managers = [];
    }

    get transferTax() {
        return this.#trasferTax;
    }

    contractManager(manager){
        if(!(manager instanceof Manager)){
            return new Error('Informe um gerente válido');
        }

        this.managers.push(manager);
    }
}

module.exports = { Bank };