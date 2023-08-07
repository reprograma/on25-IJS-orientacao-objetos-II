const { Bank } = require("./Bank");
const { Person } = require("./Person");

class Client extends Person {
  banks;

  constructor(name, cpf) {
    super(name, cpf);
    this.banks = [];
  }
  hasAccountInThisBank(bank) {
    return (
      this.banks.find((element) => element.bank.bankCode === bank.bankCode) !==
      undefined
    );
  }

  #getAnyManager(bank) {
    let manager = bank.managers;
    let randownManager = Math.floor(Math.random() * manager.length);
    let chosenManager = manager[randownManager];
    chosenManager.addClient(this);

    return chosenManager;
  }
  addBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido");
      return;
    }

    if (this.hasAccountInThisBank(bank)) {
      console.log(
        `Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
      );
      return;
    }

    const manager = this.#getAnyManager(bank);
    this.banks.push({
      bank: bank,
      manager: manager.name,
    });

    const bankIndex = Bank.createdBanks.findIndex(
      (element) => element.bankCode === bank.bankCode
    );
    Bank.createdBanks[bankIndex].qtdClients++;

    console.log(
      `Banco ${bank.bankCode} adicionado à cliente ${this.name}.Gerente atribuído: ${manager.name}.`
    );
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido");
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
}

module.exports = { Client };
