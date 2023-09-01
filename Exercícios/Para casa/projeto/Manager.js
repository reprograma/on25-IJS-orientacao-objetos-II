
class Manager {
  constructor(name, cpf, salary) {
    this.name = name;
    this.cpf = cpf;
    this.salary = salary;
  }
  toString() {
    return `${this.name} (CPF: ${this.cpf}) - Salário: R$ ${this.salary.toFixed(2)}`;
  }
}

module.exports = { Manager };

