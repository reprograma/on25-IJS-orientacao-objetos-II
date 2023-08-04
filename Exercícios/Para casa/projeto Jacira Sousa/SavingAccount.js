const { BankAccount } = require("./BankAccount");


class SavingAccount extends BankAccount {
    #qtdWithdrawal = 0;
    #MAX_OF_WITHDRAWAL = 2;
    #WithdrawalTax = 0.03;
    incomeRate;
    incomeDay;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber);
        this.incomeRate = incomeRate;
        this.incomeDay = incomeDay;
    }

    generateIncome(currentDay) {
        if(currentDay != this.incomeDay){
           console.log(`Hoje não é seu dia de rendimento. Aguarde até o dia ${this.incomeDay} para atualizar seu rendimento.`)
        }else{
            const updatedBalance = this.balance * this.incomeRate;
            this.balance  += updatedBalance;
            console.log(`Hoje é seu dia de rendimentos e seu saldo foi atualizado para ${this.balance},00`)
        }
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal;
    }

    get WithdrawalTax() {
        return this.#WithdrawalTax;
    }

    set WithdrawalTax(newWithdrawalTax){
        this.#WithdrawalTax = newWithdrawalTax;
    }

    
    cashWithdrawal(amount){
		console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas`);
        
        if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL ){
            if(this.balance >= amount){
                this.balance -= amount;
                this.#qtdWithdrawal++;
                console.log(`Retirada realizada com sucesso. Seu saldo restante é de R$ ${this.balance},00`);
            }else{
                console.log(`Você não tem saldo suficiente para essa operação.`)
            }
        }else {
            const amountWithTax = amount + (amount * this.#WithdrawalTax);
            if(this.balance >= amountWithTax){
            this.balance -= amountWithTax;
            this.#qtdWithdrawal++;
            console.log(`Retirada realizada com sucesso. Seu saldo restante é de R$ ${this.balance},00`);
        }else {
            console.log(`Você não tem saldo suficiente para essa operação.`)
	    }

        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`)
        }  
    }

}


module.exports = { SavingAccount };