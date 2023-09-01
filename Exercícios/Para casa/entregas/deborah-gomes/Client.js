const { Bank } = require('./Bank');
const { Person } = require('./Person');

class Client extends Person {
  banks = [];

  constructor(name, cpf) {
    super(name, cpf);
  }

  hasAccountInBank(bank) {
    return this.banks.some((account) => account.bank.bankCode === bank.bankCode);
  }

  getRandomManager(bankManagers) {
    const randomIndex = Math.floor(Math.random() * bankManagers.length);
    return bankManagers[randomIndex];
  }

  addBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log('Informe um banco válido.');
      return;
    }

    if (!bank.managers || bank.managers.length === 0) {
      console.log('Este banco não possui gerentes associados.');
      return;
    }

    const manager = this.getRandomManager(bank.managers);
    this.banks.push({ bank, manager });
    bank.qtdClients++;
    console.log(`Banco ${bank.bankName} associado ao cliente ${this.name}.`);
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log('Informe um banco válido.');
      return;
    }

    if (!this.hasAccountInBank(bank)) {
      console.log(`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida.`);
      return;
    }

    this.banks = this.banks.filter((account) => account.bank.bankCode !== bank.bankCode);
    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
    Bank.createdBanks[bankIndex].qtdClients--;

    console.log(`Banco ${bank.bankName} removido da cliente ${this.name}.`);
  }
}

module.exports = { Client };

