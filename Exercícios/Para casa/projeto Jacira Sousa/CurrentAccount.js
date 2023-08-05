const { BankAccount } = require("./BankAccount");

class CurrentAccount extends BankAccount {
    
    constructor(client, bank, accountNumber, agencyNumber) {
        super(client, bank, accountNumber, agencyNumber);
		
    }

    transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof CurrentAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}
		
		if (this.balance >= amount) {
			this.balance -= amount;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
			console.log(`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.balance
				}. Para realizar essa transferência você precisa ter ${amount} em conta.`
			);
		}
	}

	cashWithdrawal(amount){
		if(this.balance >= amount){
			this.balance -= amount;
			console.log(`Retirada realizada com sucesso. Seu saldo restante é de R$ ${this.balance},00`);
		}else{
			console.log(`Você não tem saldo suficiente para essa operação.`)
		}
}
}

module.exports = { CurrentAccount };