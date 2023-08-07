const { Manager } = require("./Manager");

class Bank {
  bankCode;
  bankName;
  #trasferTax;
  managers = [];

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#trasferTax = transferTax;
    this.constructor.createdBanks.push({
      bankCode: this.bankCode,
      qtdClients: 0,
    });
  }

  get transferTax() {
    return this.#trasferTax;
  }

  contractManager(manager) {
    if (!(manager instanceof Manager)) {
      return new Error("Informe um cliente válido");
    } else {
      this.managers.push(manager);
      console.log(`Gerente ${manager.name} contratado(a) no banco ${this.bankName}`)
    }
  }
}

module.exports = { Bank };

