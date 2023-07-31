// Importações
const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount');
const { CurrentAccount } = require('../entregas/thayssa-souza/CurrentAccount');
const { SavingAccount } = require('../entregas/thayssa-souza/SavingAccount');

// Criação de bancos
const bank1 = new Bank(100, 'Lua Bank', 0.01);
const bank2 = new Bank(200, 'Code Bank', 0.02);

// Criação de clientes
const client1 = new Client('Luara', 123456789);
const client2 = new Client('Simone', 987654321);
const client3 = new Client('Ada', 987654321);

// Associando clientes a bancos
client1.addBank(bank1); 
client1.addBank(bank1); 
client1.addBank(bank2); 
client1.removeBank(bank2); 
client1.removeBank(bank2); 

client2.addBank(bank1); 
client2.addBank(bank2); 

client3.addBank(bank1); 
client3.addBank(bank2); 

client3.addBank("Banco que não existe"); // Informe um banco válido.

// Conferindo bancos
console.log(Bank.createdBanks);

console.log(bank1);
console.log(bank2);

// Conferindo clientes
console.log(client1);
console.log(client2);
console.log(client3);

// Criação de conta
const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
const bankAccount2 = new BankAccount(client2, bank2, 3333, 4444);

// Utilizando os métodos de Conta Corrente
bankAccount1.creditAmount(5000);
bankAccount2.creditAmount(2000);

// Transferência entre bancos diferentes
bankAccount1.transferTo(bankAccount2, 1500);
bankAccount2.transferTo(bankAccount1, 5000);

// Saque em caixas 24h
bankAccount1.cashWithdrawal(2000);
bankAccount2.cashWithdrawal(4000);


// Criação de Conta Corrente:
const currentAccount1 = new CurrentAccount(client1, bank1, 5656, 7878);
const currentAccount2 = new CurrentAccount(client2, bank2, 9090, 1212);

currentAccount1.creditAmount(500);
console.log(currentAccount1.balance);
currentAccount1.transferTo(currentAccount2, 300);
currentAccount2.transferTo(currentAccount1, 700); //erro por não ter saldo suficiente

// Criação de Conta Poupança:
const savingAccount1 = new SavingAccount(client1, bank1, 3434, 5656, 0.3, "15");
const savingAccount2 = new SavingAccount(client2, bank2, 7878, 9090, 0.5, "31");

savingAccount1.creditAmount(500);
savingAccount1.generateIncome(new Date());
savingAccount1.cashWithdrawal(100);
savingAccount1.cashWithdrawal(100);
savingAccount1.cashWithdrawal(100); //taxas começam a ser cobradas
savingAccount1.cashWithdrawal(200); //erro por não ter saldo suficiente

savingAccount2.creditAmount(100);
savingAccount2.generateIncome(new Date());