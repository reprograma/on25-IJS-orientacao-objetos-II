// importações

const { Bank } = require('../projeto/Bank');
const { Client } = require('../projeto/Client');
const { BankAccount } = require('../projeto/BankAccount');
const { SavingAccount } = require ('../Michele_Feitosa/SavingAccount');
const { CurrentAccount } = require ('../Michele_Feitosa/CurrentAccount');



const client1 = new Client('Michele', '123.456.789-00');
const bank1 = new Bank('001', 'Banco A', 0.01);

// Adicionando o banco ao cliente
client1.addBank(bank1);

// Criando uma conta corrente para o cliente
const currentAccount1 = new CurrentAccount(client1, bank1, '12345-6', '7890');

// Creditando R$ 1000 na conta corrente
currentAccount1.creditAmount(1000); // O novo saldo da conta é: R$ 1000


// Criando uma conta poupança para o cliente
const savingAccount1 = new SavingAccount(client1, bank1, '65432-1', '0987', 0.5, 15);

// Creditando R$ 2000 na conta poupança
savingAccount1.creditAmount(2000);

// Testando o método generateIncome para a conta poupança (o saldo será atualizado apenas se o dia atual for igual ao dia de rendimento, que é 15 neste exemplo)
savingAccount1.generateIncome(15);  // Rendimento gerado! O novo saldo é de R$ 2010

// Realizando um saque na conta corrente (o saldo é suficiente e a primeira retirada é gratuita)
currentAccount1.cashWithdrawal(547);  // Você sacou R$ 547. O novo saldo da conta é: R$ 453

// Realizando um saque na conta poupança (o saldo é suficiente e a primeira retirada é gratuita)
savingAccount1.cashWithdrawal(155); // Você já realizou 0 retiradas. Você tem direito a 2 retiradas gratuitas.
// Retirada realizada com sucesso. Seu saldo restante é R$ 1855,00
// Você já realizou 1 retiradas.

// Tentando realizar mais um saque na conta poupança (a primeira retirada já foi realizada, então a segunda terá a taxa de 3%)
savingAccount1.cashWithdrawal(200); // Retirada realizada com sucesso. Seu saldo restante é R$ 1655,00
//Você já realizou 2 retiradas.

savingAccount1.cashWithdrawal(55); // Retirada realizada com sucesso. Seu saldo restante é R$ 1598.35,00
//Você já realizou 3 retiradas.

// Verificando o saldo das contas após as operações
console.log(`Saldo da conta corrente: R$ ${currentAccount1.balance}`); // Saldo da conta corrente: R$ 453
console.log(`Saldo da conta poupança: R$ ${savingAccount1.balance}`); // Saldo da conta poupança: R$ 1598.35




