// Importações
const { Bank } = require("../../projeto/Bank");
const { Client } = require("../../projeto/Client");
const { BankAccount } = require("../../projeto/BankAccount");
const { CurrentAccount } = require("../../projeto/CurrentAccount");
const { SavingAccount } = require("../../projeto/SavingAccount");

// Criação de bancos
const bank1 = new Bank(100, "Lua Bank", 0.01);
const bank2 = new Bank(200, "Code Bank", 0.02);

// Criação de clientes
const client1 = new Client("Luara", 123456789);
const client2 = new Client("Simone", 987654321);
const client3 = new Client("Ada", 987654321);

// Associando clientes a bancos
client1.addBank(bank1); // Banco 100 adicionado à cliente Luara.
client1.addBank(bank1); // Cliente do CPF 123456789 já possui conta no banco Lua Bank.
client1.addBank(bank2); // Banco 200 adicionado à cliente Luara.
client1.removeBank(bank2); // Banco 200 removido da cliente Luara
client1.removeBank(bank2); // Cliente do CPF 123456789 não possui conta no banco Code Bank para ser removida.

client2.addBank(bank1); // Banco 100 adicionado à cliente Simone.
client2.addBank(bank2); // Banco 200 adicionado à cliente Simone.

client3.addBank(bank1); // Banco 100 adicionado à cliente Ada.
client3.addBank(bank2); // Banco 200 adicionado à cliente Ada.

client3.addBank("Banco que não existe"); // Informe um banco válido.

// Conferindo bancos
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 3 }, { bankCode: 200, qtdClients: 2 } ]

console.log(bank1);
console.log(bank2);

/*
Exemplo do que será impresso:
Bank { bankCode: 100, bankName: 'Lua Bank' }
*/

// Conferindo clientes
console.log(client1);
console.log(client2);
console.log(client3);

/*
Client {
  name: 'Ada',
  banks: [
    Bank { bankCode: 100, bankName: 'Lua Bank' },
    Bank { bankCode: 200, bankName: 'Code Bank' }
  ]
}
*/

/** CONTA CORRENTE */
// Criação de conta corrente
const currentAccount1 = new CurrentAccount(client1, bank1, 1111, 2222);
const currentAccount2 = new CurrentAccount(client2, bank2, 3333, 4444);

// Utilizando os métodos de Conta Corrente
//currentAccount1.creditAmount(5000); // O novo saldo da conta após o crédito é: R$ 5000,00
//currentAccount2.creditAmount(2000); // O novo saldo da conta após o crédito é: R$ 2000,00

// Transferência entre bancos diferentes
//currentAccount1.transferTo(currentAccount2, 1000);
//currentAccount2.transferTo(currentAccount1, 4000);

const savingAccount1 = new SavingAccount(client2, bank1, 5555, 6666, 0.1, 20);
const savingAccount2 = new SavingAccount(client3, bank2, 7777, 8888, 0.05, 5);

savingAccount1.creditAmount(1300);
currentAccount1.creditAmount(5000);

currentAccount1.cashWithdrawal(100);
currentAccount1.cashWithdrawal(500);
currentAccount1.cashWithdrawal(200);
currentAccount1.cashWithdrawal(300);

savingAccount1.cashWithdrawal(100);
savingAccount1.cashWithdrawal(500);
savingAccount1.cashWithdrawal(200);
savingAccount1.cashWithdrawal(300);

savingAccount1.generateIncome(1);

currentAccount1.transferTo(currentAccount2, 1500);
currentAccount2.transferTo(currentAccount1, 5000);
