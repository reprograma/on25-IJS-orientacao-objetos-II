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
        console.log(`Seu novo salário é R$${this.salario}`)
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Salário: ${this.salario}`);
    }
}

// const func1 = new Funcionario("Ale", 12345678900, 5000)

// func1.receberAumento()
// func1.exibirDados()

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario)
        this.nivelGerencia = nivelGerencia
    }

    receberAumento() {
        super.receberAumento()
    }

    exibirDados(){
        super.exibirDados()
        console.log(`Nivel de Gerência: ${this.nivelGerencia}`);
    }
}

// const gerente = new Gerente("Vitor", 111222333, 15000, "Senior");

// gerente.receberAumento();
// gerente.exibirDados();

class Assistente extends Funcionario {
    matricula;

    constructor(nome, cpf, salario, matricula) {
        super(nome, cpf, salario)
        this.matricula = matricula;
    }

    exibirDados() {
        super.exibirDados()
        console.log(`Matricula: ${this.matricula}`)
    }
}

// const assistente = new Assistente("Maria", 11100000, 3000, 12345);
// assistente.receberAumento();
// assistente.exibirDados();

class AssistenteTecnico extends Assistente {
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial){
        super(nome, cpf, salario, matricula)
        this.bonusSalarial = bonusSalarial
    }

    exibirDados(){
        super.exibirDados()
        console.log(`Bônus salarial: ${this.bonusSalarial}`)
    }
}

// const assistenteTecnico = new AssistenteTecnico("Bruno", 2220000000, 2500, 222, 500)
// assistenteTecnico.receberAumento()
// assistenteTecnico.exibirDados();

class AssistenteAdministrativo extends Assistente {
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
        super(nome, cpf, salario, matricula)
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno
    }

    exibirDados() {
        super.exibirDados()
        console.log(`Turno: ${this.turno}`);
        if(this.turno == "Noite") {
            console.log(`Adicional Noturno: ${this.adicionalNoturno}`)
        }
    }
}

const assistenteAdm = new AssistenteAdministrativo("Ana", 111222333, 2000, 333, "Noite", 200)

assistenteAdm.receberAumento()
assistenteAdm.exibirDados();

