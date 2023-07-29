class Funcionario {
  nome;
  cpf;
  salario;
  aumento = 0.1;

  constructor(nome, cpf, salario) {
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
  }

  receberAumento() {
    this.salario += this.salario * this.aumento;
    console.log(`O novo salário é de R$ ${this.salario},00.`);
  }

  exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Salário: ${this.salario}`);
  }
}

// const funcionario1 = new Funcionario('Marta', 12345678, 1000);
// funcionario1.receberAumento();
// funcionario1.exibirDados();

class Gerente extends Funcionario {
  nivelGerencia;
  aumento = 0.15;

  constructor(nome, cpf, salario, nivelGerencia) {
    super(nome, cpf, salario);
    this.nivelGerencia = nivelGerencia;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Nível de gerência: ${this.nivelGerencia}`);
  }
}

const gerente1 = new Gerente('Debora', 123456789, 1000, 'Junior');
gerente1.receberAumento();
gerente1.exibirDados();
