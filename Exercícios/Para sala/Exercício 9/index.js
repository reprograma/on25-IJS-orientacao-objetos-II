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
    console.log('O novo salario é de R$ ${this.salario},00');
  }

  exibirDados() {
    console.log('Nome: ${this.salario}');
    console.log('cpf: ${this.cpf}');
    console.log('salario: ${this.salario}');
  }
}

class Gerente extends Funcionario {
  nivelGerencia;
  aumento = 0.15;

  constructor(nome, cpf, salario, nivelGerencia) {
    super(nome, cpf, salario);
    this.nivelGerencia = nivelGerencia;
  }
  exibirDados() {
    super.exibirDados();
    console.log('Nivel de gerencia: ${this.nivelGerencia}');
  }
}

const funcionario1 = new Funcionario('Marta', 12345678, 1000);
funcionario1.receberAumento();
funcionario1.exibirDados();

class Assistente extends Funcionario {
  matricula;

  constructor(nome, cpf, salario, matricula) {
    super(nome, cpf, salario);
    this.matricula = matricula;
  }
  exibirDados() {
    super.exibirDados();
    console.log('Matricula: ${this.matricula}');
  }
}

const assistente = new Assistente('Josefa', 1234567, 1000, 111);
assistente.receberAumento();
assistente.exibirDados();

class AssistenteTecnico extends Assistente {
  bonusSalarial;

  constructor(nome, cpf, salario, bonusSalarial) {
    super(nome, cpf, salario);
    this.bonusSalarial = bonusSalarial;
  }
  exibirDados() {
    super.exibirDados();
    console.log('O bonus é de R$: ${this.bonusSalarial}');
  }
}

const assistenteTecnico = new AssistenteTecnico('Lais', 123456789, 10000, 111, 1000);
assistenteTecnico.receberAumento();
assistenteTecnico.exibirDados();

class AssistenteAdministrativo extends Assistente {
  turno;
  adicionalNoturno;

  constructor(nome, cpf, salario, turno, adicionalNoturno) {
    super(nome, cpf, salario);
    this.turno = turno;
    this.adicionalNoturno = adicionalNoturno;
  }
  exibirDados() {
    super.exibirDados();
    console.log('Turno: ${this.turno}');
    if (this.turno === 'noite') {
      console.log('Adicional noturno: ${this.adicionalNoturno}');
    }
  }
}

const assistenteAdm = new AssistenteAdministrativo('Lara', 123456768, 10000, 111, 'dia', 500);
assistenteAdm.exibirDados();
