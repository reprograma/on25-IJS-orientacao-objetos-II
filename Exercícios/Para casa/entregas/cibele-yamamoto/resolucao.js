const {BankAccount} = require('../../projeto/BankAccount')
const {CurrentAccount} = require('./CurrentAccount')
const {SavingAccount} = require('./SavingAccount')
const {Client} = require('../../projeto/Client')
const {Bank} = require('../../projeto/Bank')

const cibele = new Client("Cibele", "1234567890")
const joao = new Client("João", "1234567891")
const maria = new Client("Maria", "1234567892")

const newBank = new Bank(1, "newBank", 0.02)
const oldBank = new Bank(2, "oldBank", 0.03)
const bestBank = new Bank(3, "bestBank", 0.01)

cibele.addBank(newBank)
joao.addBank(oldBank)
maria.addBank(bestBank)


const contaBanco = new BankAccount(cibele, newBank, 11, 22);
const contaCorrente = new CurrentAccount(joao, oldBank, 33, 44)
const contaPoupanca = new SavingAccount(maria, bestBank, 55, 66, 0.01, 10)

contaBanco.balance = 2000;
console.log(contaBanco)
contaCorrente.balance = 2000;
console.log(contaCorrente)
contaPoupanca.balance = 2000;
console.log(contaPoupanca)

console.log("== contaBanco ==")
// Tentar retirar quantia maior que saldo
contaBanco.cashWithdrawal(2500) //Saldo insuficiente!
// Retirar quantia menor que saldo
contaBanco.cashWithdrawal(50) //O novo saldo é de 1950

console.log("== contaCorrente ==")
// Tentar retirar quantia maior que saldo
contaCorrente.cashWithdrawal(2500) //Saldo insuficiente!
// Retirar quantia menor que saldo
contaCorrente.cashWithdrawal(50) //O novo saldo é de 1950

console.log("== contaPoupanca ==")
// Tentar retirar quantia maior que saldo
contaPoupanca.cashWithdrawal(2500) //Saldo insuficiente!
// Retirar quantia menor que saldo
contaPoupanca.cashWithdrawal(50) //O novo saldo é de 1950
console.log("==================")

console.log("== transferência contaBanco => contaCorrente ==")
contaBanco.balance = 1000;
contaCorrente.balance = 1000;
contaBanco.transferTo(contaCorrente, 100)
console.log("== transferência contaCorrente => contaBanco ==")
contaCorrente.balance = 1000;
contaBanco.balance = 1000;
contaCorrente.transferTo(contaBanco, 100)
console.log("== transferência contaPoupanca => contaBanco ==")
contaPoupanca.balance = 1000;
contaBanco.balance = 1000;
contaPoupanca.transferTo(contaBanco, 100)

console.log("== teste generate income ==")
contaPoupanca.generateIncome(10)
