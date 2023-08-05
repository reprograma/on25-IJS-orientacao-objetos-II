 const { BankAccount } = require('./BankAccount');

 class CurrentAccount extends BankAccount {

    transferTo(anotherAccount, amount){
        if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

        if (this.balance >= amount) {
			this.balance -= amount;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.balance},00.`
            );
			console.log('O saldo atual da conta de destino é de R$ ${anotherAccount.balance},00.'
			);
		} else {
			console.log(
				`Saldo insuficiente para transferência. 
                Seu saldo atual é de ${this.balance}. 
                Para realizar uma transferência é precisa ter R$ ${amount},00 em conta.`
			);
		}    
    }
 }
 module.exports = { CurrentAccount };