class Funcionario {
    nome;
    cpf;
    salario;
    aumento = 0.1;
    constructor(nome, cpf, salario){
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

   receberAumento() {
    this.salario += this.salario * this.aumento
    console.log(`O novo salário é de R$${this.salario},00`)
    }
    exibirDados() {
        console.log(`Nome: ${this.nome}`) 
        console.log(`Cpf: ${this.cpf}`)
        console.log(`Salário: ${this.salario}`)
    }
}

const pessoa = new Funcionario("Erica", 123, 3500)
//pessoa.receberAumento()
//pessoa.exibirDados()

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15
    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario)
        this.nivelGerencia = nivelGerencia;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Nível de Gerência: ${this.nivelGerencia}`)
    }
}

class Assistente extends Funcionario {
    matricula;
    constructor(nome, cpf, salario, matricula) {
        super(nome, cpf, salario)
        this.matricula = matricula;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Matrícula: ${this.matricula}`)
    }
}

//const assistente = new Assistente("bia", 12345, 5000, 333333)
//gerente.receberAumento()
//gerente.exibirDados()

class AssistenteTecnico extends Assistente {
    bonusSalarial;
    constructor(nome, cpf, salario, matricula, bonusSalarial) {
        super(nome, cpf, salario, matricula)
        this.bonusSalarial = bonusSalarial;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Bônus salarial: R$${this.bonusSalarial},00 - Seu novo salário é de R$${this.bonuSalarial + this.salario},00`)
    }
}
//const assistente = new AssistenteTecnico("hugo", 123, 5000, 111, 35)
//assistente.exibirDados()

class AssistenteAdministrativo extends Assistente {
    turno;
    adicionalNoturno;
    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
        super(nome, cpf, salario, matricula)
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`Turno: ${this.turno}`)
        if (this.turno === "noite" || "Noite") {
            console.log(`Adicional Noturno: R$${this.adicionalNoturno} - Seu novo salário é de R$${this.salario + this.adicionalNoturno}`)
        }
    }
}
const adm = new AssistenteAdministrativo("Duda", 123, 8000, 222, "noite", 500)
adm.exibirDados()
