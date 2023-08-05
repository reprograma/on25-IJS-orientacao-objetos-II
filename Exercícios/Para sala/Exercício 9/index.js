class Funcionario {
  nome;
  cpf;
  salario;
  aumento;
  constructor(nome, cpf, salario) {
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
    this.aumento = 0.1;
  }

  receberAumento() {
    this.salario += this.salario * this.aumento;
    return this.salario;
  }

  exibirDados() {
    console.log(`O funcionário se chama: ${this.nome}`);
    console.log(`O cpf do funcionário é: ${this.cpf}`);
    console.log(`o salario do funcionário é  ${this.salario} `);
  }
}
const funcionario1 = new Funcionario("João", 12584785695, 1500);
funcionario1.receberAumento();
funcionario1.exibirDados();

class Gerente extends Funcionario {
  nivelDeGerencia;
  aumento = 0.15;

  constructor(nome, cpf, salario, nivelDeGerencia) {
    super(nome, cpf, salario);
    this.nivelDeGerencia = nivelDeGerencia;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`O nível de gerencia é ${this.nivelDeGerencia}`);
  }
}

const gerente1 = new Gerente("Luis", 12548796587, 10000, "Pleno");
gerente1.receberAumento();
gerente1.exibirDados();

class Assistente extends Funcionario {
  matricula;

  constructor(nome, cpf, salario, matricula) {
    super(nome, cpf, salario);
    this.matricula = matricula;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`O número de matricula é ${this.matricula}`);
  }
}

const assistente1 = new Assistente("Joaquim", 154145785, 1850, 987654321);

class AssistenteTecnico extends Assistente {
  bonusSalarial;

  constructor(nome, cpf, salario, matricula, bonusSalarial) {
    super(nome, cpf, salario, matricula);
    this.bonusSalarial = bonusSalarial;
  }
  exibirDados() {
    super.exibirDados();
    console.log(`O bonusSalarial é ${this.bonusSalarial}`);
  }
}

const assistenteTecnico1 = new AssistenteTecnico(
  "Joana",
  789654123,
  12450,
  123,
  500
);
console.log(assistenteTecnico1);
assistenteTecnico1.exibirDados();

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
    console.log(`O turno é ${this.turno}`);

    if (this.turno == "noturno") {
      console.log(
        `O turno é ${this.turno}, portanto, o adicional noturno é de R$${this.adicionalNoturno}`
      );
    }
  }
}

const assistenteAdministrativo1 = new AssistenteAdministrativo(
  "Ana",
  12356987458,
  2500,
  123,
  "noturno",
  500
);

console.log(assistenteAdministrativo1.exibirDados());
