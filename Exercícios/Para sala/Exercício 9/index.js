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
    this.salario += this.salario * this.aumento
    console.log(`O novo salário é de ${this.salario}`)
  }

  exibirDados() {
    console.log(this.nome)
    console.log(this.cpf)
    console.log(this.salario)
  }
}

class Gerente extends Funcionario {
  nivelGerencia;
  aumento = 15;

  constructor(nome, cpf, salario, nivelGerencia) {
    super(nome, cpf, salario);
    this.nivelGerencia = nivelGerencia;
  }

  exibirDados() {
    super.exibirDados();
    console.log(this.nivelGerencia)
  }
}

class Assistente extends Funcionario {
  matricula;

  constructor(nome, cpf, salario, matricula) {
    super(nome, cpf, salario);
    this.matricula = matricula;
  }

  exibirDados() {
    super.exibirDados()
    console.log(this.matricula)
  }
}

class AssistenteTecnico extends Assistente {
  bonusSalarial;

  constructor(nome, cpf, salario, matricula, bonusSalarial) {
    super(nome, cpf, salario, matricula);
    this.bonusSalarial = bonusSalarial;
  }

  exibirDados() {
    super.exibirDados();
    console.log(this.bonusSalarial);
  }
}

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
    console.log(this.turno);
    if(this.turno === "noturno") console.log(this.adicionalNoturno)
  }
}