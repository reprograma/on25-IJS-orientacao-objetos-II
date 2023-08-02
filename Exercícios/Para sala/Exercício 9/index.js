class Funcionario{
    nome;
    cpf;
    salario;
    aumento = 0.1;

    constructor(name, cpf, salario){
        this.name = name;
        this.cpf = cpf;
        this.salario = salario;
    }

    receberAumento(){
        this.salario += this.salario * this.aumento;
        console.log(`O novo salário é de R$ ${this.salario}`)
    }

    exibirDados(){
        console.log(`Seu nome é ${this.name}`);
        console.log(`Seu cpf é ${this.cpf}`);
        console.log(`Seu salario é ${this.salario}`);
    }
}

const funcionario1 = new Funcionario('Marta', 12345678, 1000);
funcionario1.receberAumento();
funcionario1.exibirDados();

class Gerente extends Funcionario{
    nivelGerencia;
    aumento = 0.15;

    constructor(name, cpf, salario, nivelGerencia){
        super(name, cpf, salario);
        this.nivelGerencia = nivelGerencia;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Seu nível de gerência é de ${this.nivelGerencia}`)
    }
}

const funcionario2 = new Gerente("Michele", 12345678, 1000, "Senior");
funcionario2.receberAumento();
funcionario2.exibirDados();

class Assistente extends Funcionario{
    matricula;

    constructor(name, cpf, salario, matricula){
        super(name, cpf, salario);
        this.matricula = matricula;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Sua matrícula é ${this.matricula}`);
    }
}

const assistente = new Assistente("Carolina", 12345678, 4000, 123);
assistente.exibirDados();

class AssistenteTecnico extends Assistente{
    bonusSalarial;

    constructor(name, cpf, salario, matricula, bonusSalarial){
        super(name, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Seu bonus salarial é de ${this.bonusSalarial}`)
    }
}

const assistenteTecnico = new AssistenteTecnico('Paula', 123456, 1500, 123, 50);
assistenteTecnico.exibirDados()

class AssistenteAdministrativo extends Assistente{
    turno;
    adicionalNoturno;

    constructor(name, cpf, salario, matricula, turno, adicionalNoturno){
        super(name, cpf, salario, matricula);
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }

    exibirDados(){
        super.exibirDados();
        if(this.turno === "noite"){
            console.log(`Seu turno é ${this.turno} e o valor do seu adicional noturno é de ${this.adicionalNoturno}`)
        }
        console.log(`Seu turno é de ${this.turno}`)
        
    }
}

const assistenteAdministrativo = new AssistenteAdministrativo("Marina", 12345678, 6000, 123, "noite", 50);
assistenteAdministrativo.exibirDados();
