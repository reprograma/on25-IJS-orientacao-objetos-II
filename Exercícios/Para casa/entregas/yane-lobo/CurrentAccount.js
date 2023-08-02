const { BankAccount } = require('./BankAccount');

class CurrentAccount extends BankAccount {
    
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