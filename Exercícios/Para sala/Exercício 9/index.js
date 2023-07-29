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

// const gerente1 = new Gerente('Debora', 123456789, 1000, 'Junior');
// gerente1.receberAumento();
// gerente1.exibirDados();

class Assistente extends Funcionario {
  matricula;

  constructor(nome, cpf, salario, matricula) {
    super(nome, cpf, salario);
    this.matricula = matricula;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Matrícula: ${this.matricula}`);
  }
}

// const assistente = new Assistente('Josefa', 1234567, 1000, 111);
// assistente.receberAumento();
// assistente.exibirDados();

class AssistenteTecnico extends Assistente {
  bonusSalarial;

  constructor(nome, cpf, salario, matricula, bonusSalarial) {
    super(nome, cpf, salario, matricula);
    this.bonusSalarial = bonusSalarial;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Bônus salarial: ${this.bonusSalarial}`);
  }
}

// const assistenteTecnico = new AssistenteTecnico('Lais', 123456789, 10000, 111, 1000)
// assistenteTecnico.receberAumento()
// assistenteTecnico.exibirDados()

class AssistenteAdministrativo extends Assistente {
  turno;
  adicionalNoturno;

  constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
    super(nome, cpf, salario, matricula);
    this.turno = turno;
    this.adicionalNoturno = adicionalNoturno;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Turno: ${this.turno}`);
    if(this.turno === 'noite') {
      console.log(`Adicional noturno: ${this.adicionalNoturno}`);
    }
  }
}

const assistenteAdm = new AssistenteAdministrativo('Lara', 123456768, 10000, 111, 'dia', 500)
assistenteAdm.exibirDados()
