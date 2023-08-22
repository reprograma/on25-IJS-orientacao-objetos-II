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
        console.log(`O novo salario é de ${this.salario},00.`)
    }

    exibirDados() {
    console.log(`Nome: ${this.nome}`)
    console.log(`CPF: ${this.cpf}`)
    console.log(`Salario: ${this.salario}`)
    }
}

// const funcionario1 = new Funcionario ('Maria', 12345678, 1000)
// funcionario1.receberAumento()
// funcionario1.exibirDados()

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor (nome, cpf, salario, nivelGerencia){
        super(nome, cpf, salario);
        this.nivelGerencia = nivelGerencia;
    } 

    exibirDados() {
        super.exibirDados();
        console.log(`Nivel de Gerência: ${this.nivelGerencia}`)
    }
}

// const gerente1 = new Gerente ('Debora', 123445, 1000, 'Júnior')
// gerente1.receberAumento()
// gerente1.exibirDados()

class Assistente extends Funcionario {
    matricula;

    constructor(nome, cpf, salario, matricula){
        super(nome, cpf, salario);
        this.matricula = matricula;
    }

    exibirDados() {
        super.exibirDados();
        console.log(`Matricula: ${this.matricula}`)
    }
}

// const assistente1 = new Assistente (`Ana`, 123455666, 1000, 11111)
// assistente1.receberAumento()
// assistente1.exibirDados()


class AssistenteTecnico extends Assistente {
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial) {
        super(nome, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Bonus Salarial: ${this.bonusSalarial}`)
    }
}

// const assistenteTecnico1 = new AssistenteTecnico ('Lais', 2134422344, 2000, 222222, 1000);
// assistenteTecnico1.receberAumento()
// assistenteTecnico1.exibirDados()

class AssistenteAdministrativo extends Assistente {
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
        super(nome, cpf, salario, matricula);
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Turno: ${this.turno} `)
            if(this.turno == 'noite') {
            console.log(`Adicional Noturno: ${this.adicionalNoturno} `)
        }
    }
}

const assistenteAdministrativo1 = new AssistenteAdministrativo (`Lucas`, 1233344, 3000, 444, 'dia', 120)
assistenteAdministrativo1.exibirDados()