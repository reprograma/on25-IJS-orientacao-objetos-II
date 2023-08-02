const { BankAccount } = require('./BankAccount');

class CurrentAccount extends BankAccount {

/*     cashWithdrawal(amount){
        if(!(amount <= this.balance)){
            console.log('Você não tem saldo suficiente para realizar essa operação!')
        } else{
            this.balance -= amount
            console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ {$this.balance}`)
        }
    } */

    
    transferTo(anotherAccount, amount){
        if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		} else {
            this.balance -= amount
            anotherAccount +=
            console.log(`Você transferiu R$ ${amount}}`)
        }
    }
}
module.exports = { CurrentAccount }