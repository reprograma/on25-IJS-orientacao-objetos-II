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
        this.salario += this.salario * this.aumento;
        console.log(`O novo salario é de R$ ${this.salario}`);
    }

    exibirDados() {
        console.log(this.nome);
        console.log(this.cpf);
        console.log(this.salario);
    }

}

//const funcionario1 = new Funcionario ('Kerry', 47859687423, 7000 );
//funcionario1.receberAumento();
//funcionario1.exibirDados();

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia){
      super(nome, cpf, salario);
      this.nivelGerencia = nivelGerencia;
    }

    exibirDados(){
        super.exibirDados;
        console.log(this.nivelGerencia);
    }
    
}

//const gerente1 = new Gerente ('James', 87859687423, 10000, "Senior" );
//gerente1.receberAumento();
//gerente1.exibirDados();

class Assistente extends Funcionario {
    matricula;

    constructor(nome, cpf, salario, nivelGerencia, matricula){
        super(nome, cpf, salario, nivelGerencia);
        this.matricula = matricula;
    }

    
    exibirDados(){
        super.exibirDados;
        console.log(this.matricula);
    }
}

//const assistente1 = new Assistente ('James', 87859687423, 10000, "Senior", 448);
//assistente1.receberAumento();
//assistente1.exibirDados();


class AssistenteTecnico extends Assistente {
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial){
        super(nome, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    
    exibirDados(){
        super.exibirDados;
        console.log(`Bonus salarial ${this.bonusSalarial}`);
    }
}

//const assistecnico1 = new AssistenteTecnico ('Jorge', 11159687423, 10000, "Pleno", 1000);
//assistecnico1.receberAumento();
//assistecnico1.exibirDados();

class AssistenteADM extends Assistente {
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno){
        super(nome, cpf, salario, matricula);
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
      }
  
      exibirDados(){
          super.exibirDados;
          console.log(this.turno);
          if(this.turno === 'noite') {
            console.log(`Adicional noturno ${this.adicionalNoturno}`)
          }
        
      }

}

const assistenteADM1 = new AssistenteADM ('Sergio', 4972684568, 2000, 777, 'noite', 500)
assistenteADM1.exibirDados();