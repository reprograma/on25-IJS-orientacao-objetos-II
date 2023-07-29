class Funcionario {
    nome;
    cpf;
    salario;
    aumento = 0.1;

    constructor(nome, cpf, salario) {
        this.nome = nome,
        this.cpf = cpf,
        this.salario = salario
    }

    receberAumento(){
        this.salario += this.salario * this.aumento;
        console.log(`Novo salário de ${this.nome}: $${this.salario}`);
    }

    exibirDados(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Cpf: ${this.cpf}`);
        console.log(`Salário: $${this.salario}`)
    }
}

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia){
        super(nome, cpf, salario),
        this.nivelGerencia = nivelGerencia
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Nível gerência: ${this.nivelGerencia}`)
    }
}

class Assistente extends Funcionario {
    matricula;

    constructor(nome, cpf, salario, matricula){
        super(nome, cpf, salario),
        this.matricula = matricula
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Matrícula: ${this.matricula}`)
    }
}

class AssistenteTecnico extends Assistente {
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial){
        super(nome, cpf, salario, matricula),
        this.bonusSalarial = bonusSalarial
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Bônus salarial: $${this.bonusSalarial}`)
    }
}

class AssistenteAdministrativo extends Assistente {
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno){
        super(nome, cpf, salario, matricula),
        this.turno = turno,
        this.adicionalNoturno = adicionalNoturno
    }

    exibirDados(){
        super.exibirDados();

        console.log(`Turno: ${this.turno}`);

        if(this.turno === "noturno"){
            console.log(`Adicional noturno: ${this.adicionalNoturno}`);
        }
    }
}

const funcionario1 = new Funcionario("Daphne", "123-0", 4500);
funcionario1.exibirDados();
funcionario1.receberAumento();
funcionario1.exibirDados();

console.log('----------------------------')

const gerente1 = new Gerente("Velma", "456-0", 7400, "pleno");
gerente1.receberAumento();
gerente1.exibirDados();

console.log('----------------------------')

const assistente1 = new Assistente("Freddy", "789-0", 3000, "0458");
assistente1.exibirDados();
assistente1.receberAumento();

console.log('----------------------------')

const assistenteTecnico1 = new AssistenteTecnico("Adelaide", "321-02", 3200, "0544", 500);
assistenteTecnico1.exibirDados();
assistenteTecnico1.receberAumento();

console.log('----------------------------')

const assistenteAdministrativo1 = new AssistenteAdministrativo("Scooby", "654-02", 3400, "0454", "diurno", 300);
assistenteAdministrativo1.exibirDados();
console.log("---");
assistenteAdministrativo1.turno = "noturno";
assistenteAdministrativo1.exibirDados();

console.log('----------------------------')

const assistenteAdministrativo2 = new AssistenteAdministrativo("Catarina", "987-02", 3400, "223", "noturno", 300);
assistenteAdministrativo2.exibirDados();