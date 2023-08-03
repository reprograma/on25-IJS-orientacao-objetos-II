const {BankAccount} = require('../../projeto/BankAccount')
const {Client} = require('../../projeto/Client')
const {Bank} = require('../../projeto/Bank')

const cibele = new Client("Cibele", "1234567890")
const newBank = new Bank(1, "newBank", 0.02)

const conta = new BankAccount(cibele, newBank, 11, 22);
conta.balance = 2000;
console.log(conta)
