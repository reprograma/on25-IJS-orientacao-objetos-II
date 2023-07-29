class Funcionario {
    nome;
    cpf;
    salario;
    aumento = 0.10;

    constructor(nome, cpf, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

    receberAumento() {
        this.salario += this.salario * this.aumento
        console.log(`O salário com aumento é de R$ ${this.salario}`)
    };

    exibirDados() {
        console.log(`nome: ${this.nome}`);
        console.log(`cpf: ${this.cpf}`);
        console.log(`salário: R$ ${this.salario}`);
    };
}

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario)
        this.nivelGerencia = nivelGerencia;
    };

    exibirDados() {
        super.exibirDados()
        console.log(`nível de gerência: ${this.nivelGerencia}`);

    };
}

class Assistente extends Funcionario {
    matricula;

    constructor(nome, cpf, salario, matricula) {
        super(nome, cpf, salario)

        this.matricula = matricula
    }

    exibirDados() {
        super.exibirDados()
        console.log(`matrícula: ${this.matricula}`)
    }
}

class AssistenteTecnico extends Assistente {
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial) {
        super(nome, cpf, salario, matricula)

        this.bonusSalarial = bonusSalarial
    }
    exibirDados() {
        super.exibirDados()
        console.log(`bônus salárial de R$: ${this.bonusSalarial}`)
    }

}

class AssistenteAdministrativo extends Assistente {
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
        super(nome, cpf, salario, matricula)

        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }
    exibirDados() {
        super.exibirDados()
        console.log(`O turno é: ${this.turno}`)

        if (this.turno == 'noite') {

            console.log(`Adicional noturno de R$ ${this.adicionalNoturno}`)
        }
    }
}


const funcinario1 = new Funcionario('Carol', 1234, 5000)
console.log('---- FUNCIONÁRIO ----')
funcinario1.receberAumento();
funcinario1.exibirDados();
console.log('----------------------------------------------------------')

const gerente1 = new Gerente('Carol', 12345, 10000, 'pleno');
console.log('---- GERENTE ----')
gerente1.receberAumento();
gerente1.exibirDados();
console.log('----------------------------------------------------------')

const assistente1 = new Assistente('Carol', 123456789, 2000, 1234);
console.log('---- ASSISTENTE ----')
assistente1.receberAumento();
assistente1.exibirDados();
console.log('----------------------------------------------------------')

const assistenteTec1 = new AssistenteTecnico('Carol', 123456789, 2000, 1234, 1000);
console.log('---- ASSISTENTE TÉCNICO ----')
assistenteTec1.receberAumento();
assistenteTec1.exibirDados();
console.log('----------------------------------------------------------')

const assistenteAdm1 = new AssistenteAdministrativo('Carol', 123456789, 2000, 1234, 'noite', 400);
console.log('---- ASSISTENTE ADMINISTRATIVO ----')
assistenteAdm1.receberAumento();
assistenteAdm1.exibirDados();

