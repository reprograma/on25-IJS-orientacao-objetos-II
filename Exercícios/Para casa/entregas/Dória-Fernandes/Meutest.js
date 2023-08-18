const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { Manager } = require("./Manager");
const { SavingAccount } = require('./SavingAccount');
const { CurrentAccount } = require('./CurrentAccount');


// Criação dos bancos
const caixa = new Bank(104, "Caixa", 1.07);
const nubank = new Bank(260, "Nubank", 0.96);

//Criação dos clientes
const keiko = new Client("Letícia", 1317398308);
const phy = new Client("Aileen", 3087823748924);
const pedrin = new Client("Pedro", 426472984021);

// Criação dos Gerentes
const dooh = new Manager("Dória", 62464927492, 25000);
const pii = new Manager("Marcos", 6762347309, 15000);
const sams = new Manager("Samara", 7298723820, 20000);
const gui = new Manager("Guilherme", 294729748927, 18000);
const ja = new Manager("Jalile", 2847230428, 10000);
const any = new Manager("Any", 238083824, 13000);

// contratando Gerentes

caixa.contractManager(pii);
caixa.contractManager(sams);
caixa.contractManager(any);

nubank.contractManager(dooh);
nubank.contractManager(gui);
nubank.contractManager(ja);

// Associando clientes a bancos
keiko.addBank(nubank);
phy.addBank(caixa);
pedrin.addBank(nubank);

// Conferindo Bancos

console.log(Bank.createdBanks);

console.log(caixa);
console.log(nubank);


//Conferindo Clientes

console.log(keiko);

// Conferindo Gerentes

console.log(dooh);
console.log(gui);
console.log(ja);


const keikoCurrent = new CurrentAccount(keiko, nubank, 123456, 654321);
const pedrinCurrent = new CurrentAccount(pedrin, nubank, 756482, 237683);
const phyCurrent = new CurrentAccount(phy, caixa, 567098, 098786)

keikoCurrent.creditAmount(5000);
pedrinCurrent.creditAmount(2000);

// Transferência entre bancos diferentes
keikoCurrent.transferTo(phyCurrent, 1500);
// Transferência entre mesmo banco
keikoCurrent.transferTo(pedrinCurrent, 500);

// Retirada em banco 24h
keikoCurrent.cashWithdrawal(100);
keikoCurrent.cashWithdrawal(500);
keikoCurrent.cashWithdrawal(200);
keikoCurrent.cashWithdrawal(300);


// Criação de conta poupança
const keikoSaving = new SavingAccount(keiko, nubank, 345678, 567890, 20, 0.07);
const pedrinSaving = new SavingAccount(pedrin, nubank, 756482, 237683, 10, 0.08);
const phySaving = new SavingAccount(phy, caixa, 567098, 098786, 12, 0.03)

// Utilizando os métodos de Conta Poupança
keikoSaving.creditAmount(1300);
keikoSaving.debitAmount(300);
keikoSaving.generateIncome(20);

// Retirada em banco 24 horas
pedrinSaving.creditAmount(1000);
pedrinSaving.cashWithdrawal(100);
pedrinSaving.cashWithdrawal(500);
pedrinSaving.cashWithdrawal(200);
pedrinSaving.cashWithdrawal(300);