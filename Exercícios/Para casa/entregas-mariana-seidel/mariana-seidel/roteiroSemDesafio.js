// Importações
const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { SavingAccount } = require('./SavingAccount');
const { CurrentAccount } = require('./CurrentAccount');

// Criação de bancos
const bank1 = new Bank(100, 'Lua Bank', 0.01);
const bank2 = new Bank(200, 'Code Bank', 0.02);

// Criação de clientes
const client1 = new Client('Luara', 123456789);
const client2 = new Client('Simone', 987654321);
const client3 = new Client('Ada', 987654321);

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


// Conferindo clientes
console.log(client1);
console.log(client2);
console.log(client3);


/** CONTA CORRENTE */
// Criação de conta corrente
const currentAccount1 = new CurrentAccount(client1, bank1, 1111, 2222);
const currentAccount2 = new CurrentAccount(client2, bank2, 3333, 4444);

// Utilizando os métodos de Conta Corrente
currentAccount1.creditAmount(5000); // O novo saldo da conta é: R$ 5000,00
currentAccount2.creditAmount(2000); // O novo saldo da conta é: R$ 2000,00

// Transferência entre bancos diferentes
currentAccount1.transferTo(currentAccount2, 1500); // O saldo atual da conta de origem é de R$ 3500. O saldo atual da conta de destino é de R$ 3500.
currentAccount2.transferTo(currentAccount1, 5000); // Saldo insuficiente para realizar a transferência. Seu saldo atual é de 3500. Para realizar essa transferência você precisa ter 5000 em conta.

// Retirada em banco 24 horas
currentAccount1.cashWithdrawal(100); // Retirada realizada. O saldo atual da conta é de R$ 3400.
currentAccount1.cashWithdrawal(500); // Retirada realizada. O saldo atual da conta é de R$ 2900.
currentAccount1.cashWithdrawal(200); // Retirada realizada. O saldo atual da conta é de R$ 2700.
currentAccount1.cashWithdrawal(300); // Retirada realizada. O saldo atual da conta é de R$ 2400.

/** CONTA POUPANÇA */
// Criação de conta poupança
const savingAccount1 = new SavingAccount(client2, bank1, 5555, 6666, 0.1, 20);
const savingAccount2 = new SavingAccount(client3, bank2, 7777, 8888, 0.05, 5); 

// Utilizando os métodos de Conta Poupança
savingAccount1.creditAmount(1300); // O novo saldo da conta é: R$ 1300,00.
savingAccount1.debitAmount(300); // O novo saldo da conta é: R$ 1000,00.
savingAccount1.generateIncome(20); // Seu novo saldo após rendimentos é de R$ 1100,00.

// Transferência entre bancos diferentes
savingAccount1.transferTo(savingAccount2, 100); // Essa transferência terá uma taxa de 1%, pois se trata de uma transferência entre bancos diferentes. O saldo atual da conta de origem é de R$ 999,00. O saldo atual da conta de destino é de R$ 100,00.

// Retirada em banco 24 horas
savingAccount2.creditAmount(1000); // O novo saldo da conta é: R$ 1100,00
savingAccount2.cashWithdrawal(100); // Você já realizou 0 retiradas. Você tem direito a 2 retiradas gratuitas. Retirada realizada com sucesso. Seu saldo restante é R$ 1000,00.
savingAccount2.cashWithdrawal(500); // Você já realizou 1 retiradas. Você tem direito a 2 retiradas gratuitas. Retirada realizada com sucesso. Seu saldo restante é R$ 500,00.
savingAccount2.cashWithdrawal(200); // Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de 0.03. Retirada realizada com sucesso. Seu saldo restante é R$ 294,00.
savingAccount2.cashWithdrawal(300); // Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ 294.
