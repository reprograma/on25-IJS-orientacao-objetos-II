class Bank {
  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.constructor.createdBanks = this.constructor.createdBanks || {};
    this.constructor.createdBanks[this.bankCode] = {
      bankName: this.bankName,
      numClients: 0,
    };
  }

  get transferTax() {
    return this.#transferTax;
  }
}

class Client {
  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
    this.banks = [];
  }

  get cpf() {
    return this.#cpf;
  }

  hasAccountInThisBank(bank) {
    return this.banks.includes(bank);
  }

  addBank(bank) {
    this.banks.push(bank);
    Bank.createdBanks[bank.bankCode].numClients++;
  }

  removeBank(bank) {
    const index = this.banks.indexOf(bank);
    if (index !== -1) {
      this.banks.splice(index, 1);
      Bank.createdBanks[bank.bankCode].numClients--;
    }
  }
}

class BankAccount {
  constructor(client, bank, accountNumber, agencyNumber) {
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance) {
    this.#balance = newBalance;
  }

  creditAmount(amount) {
    this.#balance += amount;
  }

  debitAmount(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  transferTo(anotherAccount, amount) {
    if (this.debitAmount(amount)) {
      anotherAccount.creditAmount(amount);
    }
  }

  closeAccount() {
    this.client.removeBank(this.bank);
    this.bank = null;
  }
}

// Agora vamos criar as classes CurrentAccount e SavingAccount que herdam de BankAccount
class CurrentAccount extends BankAccount {
  transferTo(anotherAccount, amount) {
    if (this.debitAmount(amount)) {
      anotherAccount.creditAmount(amount);
    }
  }
}

class SavingAccount extends BankAccount {
  constructor(
    client,
    bank,
    accountNumber,
    agencyNumber,
    incomeRate,
    incomeDay
  ) {
    super(client, bank, accountNumber, agencyNumber);
    this.#incomeRate = incomeRate;
    this.#incomeDay = incomeDay;
    this.#qtdWithdrawal = 0;
    this.#MAX_OF_WITHDRAWAL = 2;
    this.#withdrawalTax = 0.03;
  }

  get qtdWithdrawal() {
    return this.#qtdWithdrawal;
  }

  cashWithdrawal(amount) {
    if (this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      this.#qtdWithdrawal++;
      if (this.debitAmount(amount)) {
        console.log(`Withdrawal successful. New balance: ${this.balance}`);
      } else {
        console.log("Insufficient funds for withdrawal.");
      }
    } else {
      const taxAmount = amount * this.#withdrawalTax;
      if (this.debitAmount(amount + taxAmount)) {
        console.log(
          `Withdrawal successful with tax. New balance: ${this.balance}`
        );
      } else {
        console.log("Insufficient funds for withdrawal.");
      }
    }
  }

  generateIncome(currentDay) {
    if (currentDay === this.#incomeDay) {
      const income = this.balance * this.#incomeRate;
      this.creditAmount(income);
      console.log(`Income generated. New balance: ${this.balance}`);
    }
  }
}

// Exemplo de uso
const bankA = new Bank("A", "Bank A", 0.02);
const client1 = new Client("John Doe", "123456789");
const account1 = new CurrentAccount(client1, bankA, "123", "001");

const bankB = new Bank("B", "Bank B", 0.03);
const client2 = new Client("Jane Smith", "987654321");
const account2 = new SavingAccount(client2, bankB, "456", "002", 0.05, 15);

client1.addBank(bankA);
client2.addBank(bankB);

account1.creditAmount(1000);
account1.transferTo(account2, 200);

account2.creditAmount(5000);
account2.cashWithdrawal(300);

account2.generateIncome(15);
