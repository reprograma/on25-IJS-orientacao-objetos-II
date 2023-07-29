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
        console.log(`salário: R$ ${this.nome}`);
    };
}

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia ){
        super(nome, cpf, salario)
        this.nivelGerencia = nivelGerencia;
    };

    exibirDados() {
        super.exibirDados()
        console.log(`nível de gerência: ${this.nivelGerencia}`);

    };
}

const funcinario1 = new Funcionario('Carol', 1234, 5000)
funcinario1.receberAumento();
funcinario1.exibirDados();
console.log('----------------------------------------------------------')

const gerente1 = new Gerente ('Carol', 12345, 10000, 'pleno');
gerente1.receberAumento();
gerente1.exibirDados();