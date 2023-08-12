const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
    #incomeRate;
    #incomeDay;
    #qtdWithdrawal = 0;
    #balance = 0; // Adicione a inicialização do atributo balance

    static MAX_OF_WITHDRAWAL = 2;
    static withdrawalTax = 0.03;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber);
        this.#incomeRate = incomeRate;
        this.#incomeDay = incomeDay;
    }
    generateIncome(currentDay) {
        if (currentDay === this.#incomeDay) {
            const incomeAmount = this.#balance * this.#incomeRate;
            this.#balance += incomeAmount;
            console.log(`Seu novo saldo após rendimentos é de R$ ${this.#balance.toFixed(2)}`);
            return this.#balance;
        }
    }

    cashWithdrawal(amount) {
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. As primeiras ${SavingAccount.MAX_OF_WITHDRAWAL} retiradas são gratuitas.`);

        if (this.#qtdWithdrawal < SavingAccount.MAX_OF_WITHDRAWAL) {
            this.#qtdWithdrawal++;
            super.cashWithdrawal(amount);
            console.log(`Total de retiradas: ${this.#qtdWithdrawal}`);
        } else {
            const withdrawalAmount = amount + amount * SavingAccount.withdrawalTax;
            if (this.#balance >= withdrawalAmount) {
                this.#qtdWithdrawal++;
                this.#balance -= withdrawalAmount;
                console.log(`Você não possui mais retiradas gratuitas. Cada retirada terá uma taxa de ${SavingAccount.withdrawalTax}`);
                console.log(`Retirada realizada. O saldo atual da conta é de R$ ${this.#balance.toFixed(2)}.`);
                console.log(`Total de retiradas: ${this.#qtdWithdrawal}`);
            } else {
                console.log(`Saldo insuficiente para realizar a retirada. Seu saldo atual é de R$ ${this.#balance.toFixed(2)}.`);
                console.log(`Você precisa de R$ ${withdrawalAmount.toFixed(2)} para realizar essa retirada.`);
            }
        }
    }
}

module.exports = { SavingAccount };
