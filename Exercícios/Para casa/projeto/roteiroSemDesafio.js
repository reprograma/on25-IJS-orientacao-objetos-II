// Importações
const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { SavingAccount } = require('../entregas/SavingAccount');
const { CurrentAccount } = require('../entregas/CurrentAccount');

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
client1.removeBank(bank2); // Cliente do CPF 123456789 não possui conta no banco Code Bank para ser removida.

client2.addBank(bank1); 
client2.addBank(bank2); 

client3.addBank(bank1); 
client3.addBank(bank2); 

client3.addBank("Banco que não existe"); // erro informe um banco válido.

// Conferindo bancos
console.log(Bank.createdBanks);

console.log(bank1);
console.log(bank2);

// Conferindo clientes
console.log(client1);
console.log(client2);
console.log(client3);


/** CONTA CORRENTE */
// Criação de conta corrente
const currentAccount1 = new CurrentAccount(client1, bank1, 1111, 2222);
const currentAccount2 = new CurrentAccount(client2, bank2, 3333, 4444);

// Utilizando os métodos de Conta Corrente
currentAccount1.creditAmount(5000); 
currentAccount2.creditAmount(2000); 

// Transferência entre bancos diferentes
currentAccount1.transferTo(currentAccount2, 1500);
currentAccount2.transferTo(currentAccount1, 5000); //erro por saldo insuficiente

// Retirada em banco 24 horas
currentAccount1.cashWithdrawal(100); 
currentAccount1.cashWithdrawal(500); 
currentAccount1.cashWithdrawal(200); 
currentAccount1.cashWithdrawal(300); 

/** CONTA POUPANÇA */
// Criação de conta poupança
const savingAccount1 = new SavingAccount(client2, bank1, 5555, 6666, 0.1, 20);
const savingAccount2 = new SavingAccount(client3, bank2, 7777, 8888, 0.05, 5); 

// Utilizando os métodos de Conta Poupança
savingAccount1.creditAmount(1300);
savingAccount1.debitAmount(300);
savingAccount1.generateIncome(20);

// Transferência entre bancos diferentes
savingAccount1.transferTo(savingAccount2, 100);

// Retirada em banco 24 horas
savingAccount2.creditAmount(1000);
savingAccount2.cashWithdrawal(100);
savingAccount2.cashWithdrawal(500);
savingAccount2.cashWithdrawal(200);
savingAccount2.cashWithdrawal(300);

