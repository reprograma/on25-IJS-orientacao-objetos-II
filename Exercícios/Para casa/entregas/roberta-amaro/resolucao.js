class BankAccount {
  bankCode;
  bankName;
  #transferTax;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
  }

  getTransferTax() {
    return this.#transferTax;
  }
}

class Client {
  name;
  #cpf;
  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }
  getcpf() {
    return this.#cpf;
  }
  hasAccountInThisBank(bank) {
    return this.banks.includes(bank);
  }

  add(bank) {
    this.banks.push(bank);
  }

  remove(bank) {
    this.banks;
  }
}
