class Funcionario {
    constructor(nome, cpf, salario) {
        this.nome = nome
        this.cpf = cpf
        this.salario = salario
        this.aumento = 0.1
    }

    receberAumento() {
        this.salario += (this.salario * this.aumento)
        // console.log(`Salário: ${this.salario}`)
    }

    exibirDados() {
        console.log(`Dados do ${this.constructor.name}:`)
        console.log(`Nome: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Salario: ${this.salario}`)
    }

}

class Gerente extends Funcionario {
    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario)
        this.nivelGerencia = nivelGerencia
        this.aumento = 0.15
    }

    exibirDados() {
        super.exibirDados()
        console.log(`Nível de gerência: ${this.nivelGerencia}`)
    }
}

class Assistente extends Funcionario {
    constructor(nome, cpf, salario, matricula) {
        super(nome, cpf, salario)
        this.matricula = matricula
    }
    exibirDados() {
        super.exibirDados()
        console.log(`Matricula: ${this.matricula}`)
    }
}

hwasa = new Funcionario('Hwasa', 123456789, 5000)
hwasa.receberAumento()
hwasa.exibirDados()

solar = new Gerente('Solar', 4567891011, 7000, 'Senior')
solar.receberAumento()
solar.exibirDados()

moonbyul = new Assistente('Moonbyul', 123456789, 5000, 12345)
moonbyul.exibirDados()