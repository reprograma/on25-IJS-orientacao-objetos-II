
class BankAccount {
	client;
	bank;
	accountNumber;
	agencyNumber;
	#balance = 0;

	constructor(client, bank, accountNumber, agencyNumber) {
		if (!(client instanceof Client)) {
			return new Error('Informe um cliente válido');
		}
		if (!(bank instanceof Bank)) {
			return new Error('Informe um banco válido');
		}
		if (
			client.banks.find((element) => element.bankCode === bank.bankCode) ===
			undefined
		) {
			return new Error(
				`Cliente do CPF ${client.cpf} não possui conta no banco ${bank.bankName}`
			);
		}
		this.client = client;
		this.bank = bank;
		this.accountNumber = accountNumber;
		this.agencyNumber = agencyNumber;
	}

	get balance() {
		return this.#balance;
	}

	set balance(newBalance) {
		this.#balance = newBalance;
	}

	creditAmount(amount) {
		this.#balance += amount;
		console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
	}

	debitAmount(amount) {
		this.#balance -= amount;
		console.log(`O novo saldo da conta é: R$ ${this.#balance}`);
	}

	transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

		let amountToBeDebited = amount;
		if (this.bank.bankCode !== anotherAccount.bank.bankCode) {
			amountToBeDebited = amount + amount * this.bank.transferTax;
			console.log(
				`Essa transferência terá uma taxa de ${
					this.bank.transferTax * 100
				}%, pois se trata de uma transferência entre bancos diferentes.`
			);
		}

		if (this.#balance >= amountToBeDebited) {
			this.#balance -= amountToBeDebited;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.#balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
	}

	closeAccount() {
		if (this.#balance === 0) {
			console.log(
				`Encerrando conta de ${this.client.name} no banco ${this.bank.bankName}.`
			);
			this.client = undefined;
			this.accountNumber = undefined;
			this.agencyNumber = undefined;
			this.bank = undefined;
			console.log(`Conta encerrada!`);
		} else {
			console.log(
				`Você possui um saldo de R$ ${
					this.#balance
				}. Para encerrar a conta é necessário que o saldo seja igual a zero.`
			);
		}
	}

	cashWithdrawal(amount) {
        if (this.#balance >= amount) {
			
            this.#balance -= amount;
			console.log(`O saldo atual da conta é de R$ ${this.#balance}`);
		} else {
			console.log(`Saldo insuficiente para realizar saque. Seu saldo atual é de ${this.#balance}.`);
		}
	}
}

class CurrentAccount extends BankAccount {

   transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

		if (this.balance >= amountToBeDebited) {
			this.balance -= amountToBeDebited;
			anotherAccount.balance += amount;

			console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
			console.log(
				`O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
			);
		} else {
			console.log(
				`Saldo insuficiente para realizar a transferência. Seu saldo atual é de ${
					this.balance
				}. Para realizar essa transferência você precisa ter ${amountToBeDebited} em conta.`
			);
		}
	}
}

class SavingAccount extends BankAccount {
    #qtdWithdrawal = 0;
    #MAX_OF_WITHDRAWAL = 2;
    #withdrawalTax = 0.03;
    incomeRate;
    incomeDay;
  
    constructor(client, bank, accountNumber, agencyNumber, incomeRate, incomeDay) {
        super(client, bank, accountNumber, agencyNumber);
        this.incomeRate = incomeRate;
        this.incomeDay = incomeDay;
    }

    cashWithdrawal(amount) {
      console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${this.#MAX_OF_WITHDRAWAL} retiradas gratuitas.`)
  
      if(this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
        if(this.balance >= amount) {
          this.balance -= amount;
          this.#qtdWithdrawal++;
          console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
        } else {
          console.log(`Você não tem saldo suficiente para essa operação;`);
        }
      } else {
        const amountWithTax = amount + (amount * this.#withdrawalTax);
        if(this.balance >= amountWithTax) {
          this.balance -= amountWithTax;
          this.#qtdWithdrawal++;
          console.log(`Retirada realizada com sucesso. Seu saldo restante é R$ ${this.balance},00`)
        } else {
          console.log(`Você não tem saldo suficiente para essa operação;`);
        }
      }
  
      console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
    }

    generateIncome(currentDay) {

        if(currentDay == this.incomeDay) {
            this.balance += this.balance * this.incomeRate;
            console.log(`Saldo atual com rendimentos: ${this.balance}`)
        } else {
            console.log(`Não houve rendimentos. Saldo atual: ${this.balance}`)
        }       
    }
  }