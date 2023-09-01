const { Bank } = require('./Bank');
const { Person} = require ('./Person');


  class Client extends Person {
	banks = [];
  
	constructor(name, cpf) {
	  super(name, cpf);
	}

  hasAccountInThisBank(bank) {
    return this.banks.find((element) => element.bank.bankCode === bank.bankCode) !== undefined;
  }

  getAnyManager() {
	const bankManagers = this.bank.managers;
	
	const managersList = Math.floor(Math.random() * bankManagers.length);

	return bankManagers[managersList];
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      if (bank.managers) {
            const manager = this.getAnyManager(bank.managers);
            this.banks.push({ bank, manager });
            bank.qtdClients++;
            console.log(`Banco ${bank.bankName} associado ao cliente ${this.name}.`);
        } else {
            console.log('Este banco não possui gerentes associados.');
        }
    } else {
        console.log('Informe um banco válido.');
    }
}

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log('Informe um banco válido');
      return;
    }

    if (!this.hasAccountInThisBank(bank)) {
      console.log(`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`);
      return;
    }

    this.banks = this.banks.filter((element) => element.bank.bankCode !== bank.bankCode);
    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
    Bank.createdBanks[bankIndex].qtdClients--;

    console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
  }
}

module.exports = { Client };
