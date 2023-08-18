// Importações
const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { SavingAccount } = require('./SavingAccount');
const { CurrentAccount } = require('./CurrentAccount');
const { Manager } = require('./Manager');

// Criação de bancos
const bank1 = new Bank(100, 'Lua Bank', 0.01);
const bank2 = new Bank(200, 'Code Bank', 0.02);

// Criação de clientes
const client1 = new Client('Luara', 123456789);
const client2 = new Client('Simone', 987654321);
const client3 = new Client('Ada', 987654321);

// Criação de gerentes
const manager1 = new Manager('Maria', 123456789, 5000);
const manager2 = new Manager('Sandra', 987654321, 7000);
const manager3 = new Manager('Bianca', 987654321, 6500);
const manager4 = new Manager('Josefa', 987654321, 12000);
const manager5 = new Manager('Nina', 987654321, 9500);

// Contratando gerentes
bank1.contractManager(manager1); // Gerente Maria contratada no banco Lua Bank.
bank1.contractManager(manager2); // Gerente Sandra contratada no banco Lua Bank.

bank2.contractManager(manager3); // Gerente Bianca contratada no banco Code Bank.
bank2.contractManager(manager4); // Gerente Josefa contratada no banco Code Bank.
bank2.contractManager(manager5); // Gerente Nina contratada no banco Code Bank.

bank2.contractManager('Gerente que não existe'); // Informe um gerente válido.

// Associando clientes a bancos
client1.addBank(bank1); // Banco 100 adicionado à cliente Luara. Sua gerente é Sandra.
client1.addBank(bank1); // Cliente do CPF 123456789 já possui conta no banco Lua Bank.
client1.addBank(bank2); // Banco 200 adicionado à cliente Luara. Sua gerente é Josefa.
client1.removeBank(bank2); // Banco 200 removido da cliente Luara
client1.removeBank(bank2); // Cliente do CPF 123456789 não possui conta no banco Code Bank para ser removida.

client2.addBank(bank1); // Banco 100 adicionado à cliente Simone. Sua gerente é Maria.
client2.addBank(bank2); // Banco 200 adicionado à cliente Simone. Sua gerente é Nina.

client3.addBank(bank1); // Banco 100 adicionado à cliente Ada. Sua gerente é Sandra.
client3.addBank(bank2); // Banco 200 adicionado à cliente Ada. Sua gerente é Josefa.

client3.addBank("Banco que não existe"); // Informe um banco válido.

// Conferindo bancos
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 3 }, { bankCode: 200, qtdClients: 2 } ]

console.log(bank1);
console.log(bank2);

/*
Exemplo do que será impresso:
Bank {
  bankCode: 200,
  bankName: 'Code Bank',
  managers: [
    Manager { name: 'Bianca' },
    Manager { name: 'Josefa' },
    Manager { name: 'Nina' }
  ]
}
*/

// Conferindo clientes
console.log(client1);
console.log(client2);
console.log(client3);

/*
Client {
  name: 'Ada',
  banks: [
    { bank: [Bank], manager: [Manager] },
    { bank: [Bank], manager: [Manager] }
  ]
}
*/

// Conferindo gerentes
console.log(manager1);
console.log(manager2);
console.log(manager3);
console.log(manager4);
console.log(manager5);

/*
Exemplo do que será impresso:
Manager { name: 'Sandra', clients: [ 'Luara', 'Simone' ] }
*/

// Criação de conta corrente
const currentAccount1 = new CurrentAccount(client1, bank1, 1111, 2222);
const currentAccount2 = new CurrentAccount(client2, bank2, 3333, 4444);


// Utilizando os métodos de Conta Corrente
currentAccount1.creditAmount(5000); // O novo saldo da conta após o crédito é: R$ 5000,00
currentAccount2.creditAmount(2000); // O novo saldo da conta após o crédito é: R$ 2000,00

// Transferência entre bancos diferentes
currentAccount1.transferTo(currentAccount2, 1500);
currentAccount2.transferTo(currentAccount1, 5000);

/** Exemplo de saídas:
  Essa transferência terá uma taxa de 1%, pois se trata de uma transferência entre bancos diferentes.
  O saldo atual da conta de origem é de R$ 3485
  O saldo atual da conta de destino é de R$ 3500

  ---

  Essa transferência terá uma taxa de 2%, pois se trata de uma transferência entre bancos diferentes.
  Saldo insuficiente para realizar a transferência. Seu saldo atual é de 3500.
  Para realizar essa transferência você precisa ter 5100 em conta.
*/

// Retirada em banco 24 horas
currentAccount1.cashWithdrawal(100); // Retirada realizada. O saldo atual da conta é de R$ 3385.
currentAccount1.cashWithdrawal(500); // Retirada realizada. O saldo atual da conta é de R$ 2885.
currentAccount1.cashWithdrawal(200); // Retirada realizada. O saldo atual da conta é de R$ 2685.
currentAccount1.cashWithdrawal(300); // Retirada realizada. O saldo atual da conta é de R$ 2385.

// Criação de conta poupança
const savingAccount1 = new SavingAccount(client2, bank1, 5555, 6666, 0.1, 20);
const savingAccount2 = new SavingAccount(client3, bank2, 7777, 8888, 0.05, 5);

// Utilizando os métodos de Conta Poupança
savingAccount1.creditAmount(1300); // O novo saldo da conta após o crédito é: R$ 1300,00
savingAccount1.debitAmount(300); // O novo saldo da conta após o débito é: R$ 1000,00
savingAccount1.generateIncome(20); // Seu novo saldo após rendimentos é de R$ 1100,00

// Retirada em banco 24 horas
savingAccount2.creditAmount(1000); // O novo saldo da conta após o crédito é: R$ 1000,00
savingAccount2.cashWithdrawal(100);
savingAccount2.cashWithdrawal(500);
savingAccount2.cashWithdrawal(200);
savingAccount2.cashWithdrawal(300);

/** Exemplo de saídas:
  Você já realizou 0 retiradas. As primeiras 2 retiradas são gratuitas.
  Você ainda possui 2 retiradas gratuitas.
  Retirada realizada. O saldo atual da conta é de R$ 900.
  Total de retiradas: 1

  ---

  Você já realizou 1 retiradas. As primeiras 2 retiradas são gratuitas.
  Você ainda possui 1 retiradas gratuitas.
  Retirada realizada. O saldo atual da conta é de R$ 400.
  Total de retiradas: 2

  ---

  Você já realizou 2 retiradas. As primeiras 2 retiradas são gratuitas.
  Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de 0.03
  Retirada realizada. O saldo atual da conta é de R$ 194.
  Total de retiradas: 3

  ---

  Você já realizou 3 retiradas. As primeiras 2 retiradas são gratuitas.
  Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de 0.03
  Saldo insuficiente para realizar a transferência. Seu saldo atual é de R$ 194,00. Você precisa de R$ 309,00
  Total de retiradas: 3
*/
