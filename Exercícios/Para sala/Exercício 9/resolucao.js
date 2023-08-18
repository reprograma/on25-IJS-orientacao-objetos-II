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
        console.log(`O novo salário é de R$ ${this.salario},00`)
    }
    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Salário: ${this.salario}`);
    }
}

const funcionario1 = new Funcionario('Claire', 123456789, 1000);
funcionario1.receberAumento();
funcionario1.exibirDados();

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario);
        this.nivelGerencia = nivelGerencia;
    }

    exibirDados() {
        super.exibirDados();
        console.log(`Nível de Gerência: ${this.nivelGerencia}`)
    }
}

const gerente1 = new Gerente('Claire', 138038128310, 1000, 'Junior');
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
        console.log(`Matricula: ${this.matricula}`);
    }
}

const assistente = new Assistente('Claire', 12213343, 1000, 111);
assistente.receberAumento();
assistente.exibirDados();

class AssistenteTecnico extends Assistente {
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial) {
        super(nome, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    exibirDados() {
        super.exibirDados();
        console.log(`Bonus Salarial: R$ ${this.bonusSalarial},00`)
    }
}

const assistenteTec = new AssistenteTecnico('Claire', 12213343, 1000, 111, 20);
assistenteTec.receberAumento();
assistenteTec.exibirDados();


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
        if (this.turno == "noite") {
            console.log(`Adicional Noturno: R$ ${this.adicionalNoturno},00`);
        }

    }
}

const assistenteAdm = new AssistenteAdministrativo('Blond', 12213343, 1000, 111, "noite", 200);
assistenteAdm.receberAumento();
assistenteAdm.exibirDados();
