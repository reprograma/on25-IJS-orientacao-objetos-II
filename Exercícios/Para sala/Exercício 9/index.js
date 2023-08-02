class Funcionario {
    nome
    cpf
    salario
    aumento

    constructor(nome, cpf, salario) {
        this.nome = nome
        this.cpf = cpf
        this.salario = salario
        this.aumento = 0.1
    }

    receberAumento() {
        this.salario = this.salario + this.salario * this.aumento
        console.log(`O novo salário é de R$ ${this.salario},00`)
    }

    exibirDados() {
        console.log(`nome: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Salário: ${this.salario}`)
    }
}

//const funcionario = new Funcionario("Maria", 12312312312, 1000)
//funcionario.receberAumento()
//funcionario.exibirDados()

class Gerente extends Funcionario {
    nivelGerencia
    aumento = 0.15

    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario)
        this.nivelGerencia = nivelGerencia
    }

    exibirDados(){
        super.exibirDados()
        console.log(`Nível de gerência: ${this.nivelGerencia}`)
    }
}

//const gerente = new Gerente("Debora", 12312312312, 1000, "Junior")
//gerente.receberAumento()
//gerente.exibirDados()

class Assistente extends Funcionario {
    matricula

    constructor(nome, cpf, salario, matricula) {
        super(nome, cpf, salario)
        this.matricula = matricula
    }

    exibirDados() {
        super.exibirDados()
        console.log(`Matrícula: ${this.matricula}`)
    }
}

//const assistente = new Assistente("Aline", 1250022, 1000, 111)
//assistente.receberAumento()
//assistente.exibirDados()

class AssistenteTecnico extends Assistente {
    bonusSalarial

    constructor(nome, cpf, salario, matricula, bonusSalarial) {
        super(nome, cpf, salario, matricula)
        this.bonusSalarial = bonusSalarial
    }

    exibirDados() {
        super.exibirDados()
        console.log(`Bônus Salarial: ${this.bonusSalarial}`)
    }
}

//const assistenteTecnico = new AssistenteTecnico("Lucas", 1231542652, 2000, 222, 1000)
//assistenteTecnico.receberAumento()
//assistenteTecnico.exibirDados()

class AssistenteAdministrativo extends Assistente {
    turno
    adicionalNoturno

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
        super(nome, cpf, salario, matricula)
        this.turno = turno
        this.adicionalNoturno = adicionalNoturno
    }

    exibirDados() {
        super.exibirDados()
        console.log(`Turno: ${this.turno}`)
        if(this.turno === "noite") {
            console.log(`Adicional noturno: ${this.adicionalNoturno}`)
        }
    }
}

