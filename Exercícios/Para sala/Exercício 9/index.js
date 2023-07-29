class Funcionario {
    nome
    cpf
    salario
    aumento 

    constructor(nome, cpf, salario){
        this.nome = nome
        this.cpf = cpf
        this.salario = salario
        this.aumento = 0.10 // tanto faz passar o aumento assim ou como está na classe Gerente
    }

    receberAumento() {
    this.salario += this.salario * this.aumento
    }

    exibirDados(){
        console.log(`O nome é ${this.nome}`)
        console.log(`O cpf é ${this.cpf}`)
        console.log(`O salário é R$${this.salario},00`)
    }
}

const funcionario1 = new Funcionario ("Brena", 123, 5000)
console.log(funcionario1)
funcionario1.receberAumento()
funcionario1.exibirDados()

class Gerente extends Funcionario {
    nivelGerencia
    aumento = 0.15

    constructor(nome, cpf, salario, nivelGerencia){
        super(nome, cpf, salario)
        this.nivelGerencia = nivelGerencia
    }

    exibirDados(){
        super.exibirDados()
        console.log(`O nível de gerência é ${this.nivelGerencia}`)
    }
}
console.log("------")
const gerente1 = new Gerente("Luara", 123, 6000, "Pleno")
console.log(gerente1)
gerente1.receberAumento()
gerente1.exibirDados()

class Assistente extends Funcionario{
    matricula

    constructor(nome, cpf, salario, matricula){
        super(nome, cpf, salario)
        this.matricula = matricula
    }

    exibirDados(){
        super.exibirDados()
        console.log(`A matrícula é ${this.matricula}`)
    }

}
console.log("------")
const assistente1 = new Assistente("Maria", 123, 6000, 001)
console.log(assistente1)
assistente1.exibirDados()

class AssistenteTecnico extends Assistente{
    bonusSalarial

    constructor(nome, cpf, salario, matricula, bonusSalarial){
        super(nome, cpf, salario, matricula) // está chamando o super do Assitente e não do Funcionário pq chama sempre da classe mãe direta
        this.bonusSalarial = bonusSalarial
    }

    exibirDados(){
        super.exibirDados() // vai na classe de assitente, lá na classe de assitente que vai na classe de funcionário
        console.log(`Bônus salarial ${this.bonusSalarial}`)
    }
    
}
console.log("------")
const assistenteTecnicno1 = new AssistenteTecnico("Joana", 111, 4000, 002, 1000)
assistenteTecnicno1.exibirDados()
assistenteTecnicno1.receberAumento()
assistenteTecnicno1.exibirDados()

class AssistenteAdministrativo extends Assistente{
    turno
    adicionalNoturno

    constructor(nome, cpf, salario, matricula, turno){
        super(nome, cpf, salario, matricula)
        this.turno = turno
        this.adicionalNoturno = 0
    }
    exibirDados(){
        super.exibirDados() // vai na classe de assitente, lá na classe de assitente que vai na classe de funcionário
        console.log(`Turno ${this.turno}`)

        if(this.turno == "noturno"){
            this.adicionalNoturno = 1000
            return console.log(`Adicional noturno ${this.adicionalNoturno}`)
        }
    }
}

console.log("------")
const assistenteAdministratio1 = new AssistenteAdministrativo ("Bruna", 432, 4500, 003, "noturno")
assistenteAdministratio1.exibirDados()
console.log("------")
const assistenteAdministratio2 = new AssistenteAdministrativo ("Carol", 233, 4500, 004, "diurno")
assistenteAdministratio2.exibirDados()
