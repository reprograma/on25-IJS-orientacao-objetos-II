const { BankAccount } = require("./BankAccount")

class SavingAccount extends BankAccount {
    incomeRate;
    incomeDay;
    #qtdWithdrawal = 0;
    #MAX_OF_WITHDRAWAL = 2;
    #withdrawalTax = 0.02;

    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber);

        this.incomeRate = incomeRate;
        this.incomeDay = incomeDay;
    };

    generateIncome(currentDay) {
        if (currentDay !== this.incomeDay) {
            console.log(`Sua renda só pode ser gerada no dia ${this.incomeDay}`);
        } else {
            const newBalance = this.balance * this.incomeRate;
            this.balance += newBalance;
            console.log(`O novo saldo da conta é ${this.balance}`);
        };
    };

    get qtdWithdrawal() {
        return this.#qtdWithdrawal;
    };

    get maxOfWithdrawal() {
        return this.#MAX_OF_WITHDRAWAL;
    };

    get withdrawalTax() {
        return this.#withdrawalTax;
    };

    set withdrawalTax(withdrawalTax) {
        this.#withdrawalTax = withdrawalTax;
    };

    cashWithdrawal(amount) {
        console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)

        if (this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL && this.balance >= amount) {
            this.balance -= amount;
            this.#qtdWithdrawal++;
            console.log(`Retirada realizada! seu saldo agora é de: R$ ${this.balance}, 00`);

        } else if (this.#MAX_OF_WITHDRAWAL >= 2 && this.balance >= amount) {
            const withdrawalBalance = amount + (amount * this.#withdrawalTax);
            this.balance -= withdrawalBalance;
            this.#qtdWithdrawal++;

            console.log(`A retirada desse valor terá uma taxa de ${this.#withdrawalTax * 100} %, 
                pois você já ultrapassou suas retiradas gratuitas hoje.`);  

            console.log(`Retirada realizada! seu saldo agora é de: R$ ${this.balance}, 00`);          
        } else {
            console.log(`Você não possui saldo suficiente para fazer essa retirada!`);
        };
    };
};

module.exports = { SavingAccount };