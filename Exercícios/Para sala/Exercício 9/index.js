class Funcionario {
  name;
  cpf;
  salario;
  aumento = 0.1;

  constructor(name, cpf, salario) {
    this.name = name;
    this.cpf = cpf;
    this.salario = salario;
  }

  receberAumento() {
    this.salario += this.salario * this.aumento;
    console.log(`o novo salario é de ${this.salario},00`);
  }

  exibirDados() {
    console.log(`o nome é: ${this.name}`);
    console.log(`o CPF é: ${this.cpf}`);
    console.log(`o salário é: ${this.salario}`);
  }
}

// const f1 = new Funcionario("Lucas", "000.000.000-20", 4000);
// f1.receberAumento();

// f1.exibirDados();

class Gerente extends Funcionario {
  nivelDeGerencia;
  aumento = 0.15;
  constructor(name, cpf, salario, nivelDeGerencia) {
    super(name, cpf, salario);
    this.nivelDeGerencia = nivelDeGerencia;
  }
  exibirDados() {
    super.exibirDados();
    console.log(`O nível de gerência é: ${this.nivelDeGerencia}`);
  }
}
const g1 = new Gerente("Panda", "000.000.000-20", 1000, "Junior");
g1.receberAumento();
g1.exibirDados();
