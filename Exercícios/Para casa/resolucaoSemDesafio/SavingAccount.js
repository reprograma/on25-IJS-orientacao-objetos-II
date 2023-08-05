const { BankAccount } = require('./BankAccount');

class SavingAccount extends BankAccount {
	incomeRate;
	incomeDay;

	#qtdWithdrawal = 0; // Acrescentado
	MAX_OF_WITHDRAWAL = 2; // Acrescentado
	#withdrawalTax = 0.03; // Acrescentado

	constructor(
		client,
		bank,
		accountNumber,
		agencyNumber,
		incomeRate,
		incomeDay
	) {
		super(client, bank, accountNumber, agencyNumber);
		this.incomeRate = incomeRate;
		this.incomeDay = incomeDay;
	}

	get qtdWithdrawal() {
		return this.#qtdWithdrawal;
	}

	get withdrawalTax() {
		return this.#withdrawalTax;
	}

	set withdrawalTax(newWithdrawalTax) {
		this.#withdrawalTax = newWithdrawalTax;
	}

	generateIncome(currentDay) {
		if (currentDay === this.incomeDay) {
			const income = this.incomeRate * this.balance;
			this.balance = this.balance + income;

			console.log(
				`Seu novo saldo após rendimentos é de R$ ${this.balance},00.`
			);
		}
	}

	cashWithdrawal(amount) {
		console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)
		
		let amountToBeDebited = amount;
		if (this.#qtdWithdrawal >= this.MAX_OF_WITHDRAWAL) {
			amountToBeDebited = amount + amount * this.#withdrawalTax;
		}

		if (this.balance >= amountToBeDebited) {
			this.balance -= amountToBeDebited;
			this.#qtdWithdrawal++;
			console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
		} else {
			console.log(`Você não tem saldo suficiente para essa operação;`);
		}
		console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
	}
}

module.exports = { SavingAccount };
