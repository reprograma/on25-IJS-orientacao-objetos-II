
const { BankAccount } = require("./BankAccount");
class SavingAccount extends BankAccount {
  #qtdWithdrawal = 0;
  #MAX_OF_WITHDRAWAL = 2; // Letras maiusculas para constantes - esse valor não vai mudar.
  #withdrawalTax = 0.03;

  cashWithdrawal(amount) {
    console.log(
      `Você já realizou ${this.#qtdWithdrawal} retiradas. Você tem direito a ${
        this.#MAX_OF_WITHDRAWAL
      } retiradas gratuitas mensais.`
    );

    if (this.#qtdWithdrawal < this.#MAX_OF_WITHDRAWAL) {
      if (this.balance >= amount) {
        this.balance -= amount;
        this.#qtdWithdrawal++;
        console.log(
          `Retirada realizada com sucesso. Seu saldo restante é ${this.balance},00.`
        );
      } else {
        console.log(`Você não tem saldo suficiente para essa operação.`);
      }
    } else {
      const amountWithTax = amount + amount * this.#withdrawalTax;

      if (this.balance >= amountWithTax) {
        this.balance -= amountWithTax;
        this.#qtdWithdrawal++;
        console.log(
          `Retirada realizada com sucesso. Seu saldo restante é ${this.balance},00.`
        );
      } else {
        console.log(`Você não tem saldo suficiente para essa operação.`);
      }
    }

    console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`);
  }
}